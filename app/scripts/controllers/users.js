'use strict';

angular.module('stackoverflowApp')
  .controller('UsersCtrl', function ($scope, StackoverflowApi) {
    StackoverflowApi.getUsers().$promise.then(function(users){
      $scope.users = users;
    });
  });
