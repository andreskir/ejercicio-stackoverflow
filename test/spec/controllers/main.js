'use strict';

describe('Controller: UsersCtrl', function () {

  var UsersCtrl, scope, httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $httpBackend) {
    httpBackend = $httpBackend;
    scope = $rootScope.$new();

    UsersCtrl = $controller('UsersCtrl', {
      $scope: scope,
      $httpBackend: httpBackend
    });
  }));

  it('should retrieve users from stackoverflow API when it is initialized', function () {
    httpBackend.expectGET('https://api.stackexchange.com/2.2/users?order=desc&site=stackoverflow&sort=reputation').respond({items: []});
    httpBackend.flush();
  });

  it('should bind received users in the scope', function () {
    var users = [{display_name: 'Juan Perez', location: 'Madrid'}, {display_name: 'Pablo Altamira', location: 'Buenos Aires'}]
    httpBackend.whenGET('https://api.stackexchange.com/2.2/users?order=desc&site=stackoverflow&sort=reputation')
      .respond({items: users});
    httpBackend.flush();
    expect(scope.users).toEqual(users);
  });
});
