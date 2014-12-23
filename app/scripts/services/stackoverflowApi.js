'use strict';

angular.module('stackoverflowApp')
  .factory('StackoverflowApi', function($resource){
    return $resource('https://api.stackexchange.com/2.2', {},
      {
        getUsers: {
          url: 'https://api.stackexchange.com/2.2/users/:id',
          params: { site: 'stackoverflow', sort: 'reputation', order: 'desc' },
          method: 'GET',
          interceptor: {
            response: function(response){
              return response.data.items;
            }
          }
        }
      });
  });
