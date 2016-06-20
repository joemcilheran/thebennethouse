'use strict';

// Register `roomDetail` component, along with its associated controller and template
angular.
  module('roomDetail').
  component('roomDetail', {
    templateUrl: 'room-detail/room-detail.template.html',
    controller: ['$routeParams', 'Room',
      function RoomDetailController($routeParams, Room) {
        var self = this;
        self.room = Room.get({roomId: $routeParams.roomId}, function(room) {
          self.setImage(room.images[0]);
        });

        self.setImage = function setImage(imageUrl) {
          self.mainImageUrl = imageUrl;
        };
      }
    ]
  });
