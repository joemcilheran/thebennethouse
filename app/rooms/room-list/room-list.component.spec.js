'use strict';

describe('roomList', function() {

  // Load the module that contains the `List` component before each test
  beforeEach(module('roomList'));

  // Test the controller
  describe('roomListController', function() {
    var $httpBackend, ctrl;

    beforeEach(inject(function($componentController, _$httpBackend_) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('rooms/rooms.json')
                  .respond([{name: 'Carolina Room'}, {name: 'Oregon Room'}]);

      ctrl = $componentController('roomList');
    }));

    it('should create a `rooms` property with 2 rooms fetched with `$http`', function() {
      jasmine.addCustomEqualityTester(angular.equals);

      expect(ctrl.rooms).toEqual([]);

      $httpBackend.flush();
      expect(ctrl.rooms).toEqual([{name: 'Carolina Room'}, {name: 'Oregon Room'}]);
    });

    it('should set a default value for the `orderProp` property', function() {
      expect(ctrl.orderProp).toBe('price');
    });

  });

});
