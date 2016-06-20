'use strict';

angular.module('myApp.bar', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/bar', {
    templateUrl: 'bar/bar.html',
    controller: 'BarCtrl'
  });
}])

.controller('BarCtrl', [function() {
	function switchPics(){
	$( ".barpics" ).on( "click", exchangepics );
}
function exchangepics(){
	$(".barpics").html("<img src = 'images/thebennetbaroldpic.jpg'>");

}
}]);



switchPics();