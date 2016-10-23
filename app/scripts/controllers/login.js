'use strict';
angular.module('onlineClientApp')
  .controller('LoginCtrl',
  [
    '$scope', '$location', 'authService',
    function($scope, $location, authService) {

      $scope.loginData = {
        email: "",
        password: "",
        useRefreshTokens: false
      };

      $scope.message = "";
      $scope.userLogin = userLogin;
     
      function userLogin() {
        authService.logIn($scope.loginData)
          .then(function(saveReault) {
            $scope.message = "Login Successful";
            $location.path('/about');
          })
          .catch(function(error) {
            $scope.message = err.error_description;
          });
      };
    }
  ]);


