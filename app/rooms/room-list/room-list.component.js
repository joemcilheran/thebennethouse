'use strict';

// Register `roomList` component, along with its associated controller and template
angular.
  module('roomList').
  component('roomList', {
    templateUrl: 'room-list/room-list.template.html',
    controller: ['Room',
      function RoomListController(Room) {
        this.phones = Room.query();
        this.orderProp = 'price';
      }
    ]
  });
