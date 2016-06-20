'use strict';

angular.module('myApp.history', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/history', {
    templateUrl: 'history/history.html',
    controller: 'HistoryCtrl'
  });
}])

.controller('HistoryCtrl', [function() {

}]);

function displayWholeTextWhenHover(){
	$(".pic").hover(function(){
		$(".rest").show();
	},function(){
		$(".pic").hide();

	});
}
displayWholeTextWhenHover();