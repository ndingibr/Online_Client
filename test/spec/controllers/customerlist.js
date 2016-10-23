'use strict';

describe('Controller: CustomerlistCtrl', function () {

  // load the controller's module
  beforeEach(module('onlineClientApp'));

  var CustomerlistCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CustomerlistCtrl = $controller('CustomerlistCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CustomerlistCtrl.awesomeThings.length).toBe(3);
  });
});
