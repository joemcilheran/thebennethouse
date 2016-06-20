"use strict"
angular.module('MyApps.rooms')
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/rooms', {
    templateUrl: 'rooms/rooms.html',
    controller: 'RoomCtrl'
  }).
  when('/rooms/:roomName', {
          template: '<room-detail></room-detail>'
  });
}])

.controller('RoomCtrl', [function() {

}]);