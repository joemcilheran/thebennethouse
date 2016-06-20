'use strict';

angular.
  module('core.room').
  factory('Room', ['$resource',
    function($resource) {
      return $resource('rooms/:roomName.json', {}, {
        query: {
          method: 'GET',
          params: {roomName: 'rooms'},
          isArray: true
        }
      });
    }
  ]);
