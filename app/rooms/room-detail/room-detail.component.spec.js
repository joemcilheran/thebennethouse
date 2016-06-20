'use strict';

describe('roomDetail', function() {

  // Load the module that contains the `phoneDetail` component before each test
  beforeEach(module('roomDetail'));

  // Test the controller
  describe('RoomDetailController', function() {
    var $httpBackend, ctrl;
    var xyzPhoneData = {
      name: 'phone xyz',
      images: ['image/url1.png', 'image/url2.png']
    };

    beforeEach(inject(function($componentController, _$httpBackend_, $routeParams) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('phones/xyz.json').respond(xyzPhoneData);

      $routeParams.phoneId = 'xyz';

      ctrl = $componentController('roomDetail');
    }));

    it('should fetch the room details', function() {
      jasmine.addCustomEqualityTester(angular.equals);

      expect(ctrl.room).toEqual({});

      $httpBackend.flush();
      expect(ctrl.room).toEqual(xyzRoomData);
    });

  });

});
