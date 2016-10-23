'use strict';

angular.module('onlineClientApp')
  .controller('RoleCtrl',
  [
    '$scope', '$location', 'roleService',
    function($scope, $location, roleService) {

      $scope.roleData = {
        Id: "",
        Name: ""
      };
      $scope.message = "";

      $scope.roles = [];

      roleService.getRoles()
        .then(function(results) {
            $scope.roles = results.data;
          },
          function(error) {
            alert(error.data.message);
          });
    }
  ]);
