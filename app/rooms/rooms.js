'use strict';

angular.module('myApp.rooms', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/rooms', {
    templateUrl: 'rooms/rooms.html',
    controller: 'RoomCtrl'
  });
}])

.controller('RoomCtrl', [function() {

}]);

function hoverForDescription(roomDescription,pic){
	$(pic).hover(function() {
		$( roomDescription ).show( 100 );
	},
	function(){
		$( roomDescription ).hide( 100 );
	});
}

function displayRoomDescriptions(){
	hoverForDescription("#carolinaroomdescription","#carolinaroompic");
	hoverForDescription("#oregonroomdescription","#oregonroompic");
	hoverForDescription("#acadiaroomdescription","#acadiaroompic");
	hoverForDescription("#columbiaroomdescription","#columbiaroompic");
	hoverForDescription("#virginiaroomdescription","#virginiaroompic");
}
displayRoomDescriptions();