'use strict';
var serviceBase = 'http://localhost:64901/';

angular
  .module('onlineClientApp',
  [
    'ngRoute',
    'LocalStorageModule'
    ])
  .config(function($routeProvider) {
    $routeProvider
      .when('/',
      {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about',
      {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/signup',
      {
        templateUrl: 'views/signup.html',
        controller: 'SignupCtrl',
        controllerAs: 'signup'
      })
      .when('/login',
      {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      })
      .when('/customerlist',
      {
        templateUrl: 'views/customerlist.html',
        controller: 'CustomerlistCtrl',
        controllerAs: 'customerlist'
      })
      .when('/role', {
        templateUrl: 'views/role/list.html',
        controller: 'RoleCtrl',
        controllerAs: 'role'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .constant('ngAuthSettings',
  {
    apiServiceBaseUri: serviceBase,
    clientId: 'ngAuthApp'
  });


