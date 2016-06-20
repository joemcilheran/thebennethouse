'use strict';

angular.module('myApp.tours', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/tours', {
    templateUrl: 'tours/tours.html',
    controller: 'toursCtrl'
  });
}])

.controller('toursCtrl', [function() {

}]);