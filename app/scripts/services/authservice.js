'use strict';

angular
  .module('onlineClientApp')
  .factory('authService', ['$http', '$q', 'ngAuthSettings', 'localStorageService',
function ($http, $q, ngAuthSettings, localStorageService) {

    var serviceBase = ngAuthSettings.apiServiceBaseUri;
  
    var authentication = {
      isAuth: false,
      email: "",
      useRefreshTokens: false
    };

    var service = {
      saveRegistration: saveRegistration,
      logIn: logIn,
      logOut: logOut,
      authentication: authentication,
      getRoles: getRoles
    };

    return service;
 
    function saveRegistration(registration) {
      logOut();
      return $http.post(serviceBase + 'api/account/register', registration).then(function (response) {
        return response;
      });

    };

    function logIn(loginData) {
      var data = "grant_type=password&username=" + loginData.email + "&password=" + loginData.password;
      var deferred = $q.defer();

      $http.post(serviceBase + 'token', data, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).success(function (response) {

        if (loginData.useRefreshTokens) {
          localStorageService.set('authorizationData', { token: response.access_token, email: loginData.email, refreshToken: response.refresh_token, useRefreshTokens: true });
        }
        else {
          localStorageService.set('authorizationData', { token: response.access_token, email: loginData.email, refreshToken: "", useRefreshTokens: false });
        }
        authentication.isAuth = true;
        authentication.email = loginData.email;
        authentication.useRefreshTokens = loginData.useRefreshTokens;

        deferred.resolve(response);

      }).error(function (err, status) {
        logOut();
        deferred.reject(err);
      });

      return deferred.promise;
    }

  function getRoles() {
      return $http.get(serviceBase + 'api/account/roles').then(function (results) {
          return results;
        });
    }

  function logOut() {
      localStorageService.remove('authorizationData');
      authentication.isAuth = false;
      authentication.email = "";
      authentication.useRefreshTokens = false;
    };


  }]);