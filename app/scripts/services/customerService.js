'use strict';

angular
  .module('onlineClientApp')
  .factory('customerService',
  [
    '$http', '$q', 'ngAuthSettings', 
    function($http, $q, ngAuthSettings) {

      var serviceBase = ngAuthSettings.apiServiceBaseUri;

      var service = {
        searchCustomer: searchCustomer
      };

      return service;

      function searchCustomer(searchData) {
        var url = serviceBase +
          'api/Customer?email=' +
          searchData.email +
          '&firstName=' +
          searchData.firstName +
          '&lastName=' +
          searchData.lastName +
          '&dateofBirth=' +
          searchData.dateOfBirth +
          '&ipAddress=' +
          searchData.ipAddress;
        return $http.get(url).then(function (results) {
          return results;
        });
        }
    }
  ]);