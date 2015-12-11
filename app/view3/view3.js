'use strict';

angular.module('myApp.view3', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/Transportation', {
    templateUrl: 'view3/transportation.html',
    controller: 'View3Ctrl'
  });
  $routeProvider.when('/Violence', {
    templateUrl: 'view3/violence.html',
    controller: 'View3Ctrl'
  });
  $routeProvider.when('/Poverty', {
    templateUrl: 'view3/poverty.html',
    controller: 'View3Ctrl'
  });
  $routeProvider.when('/Disease', {
    templateUrl: 'view3/disease.html',
    controller: 'View3Ctrl'
  });
  $routeProvider.when('/Education', {
    templateUrl: 'view3/education.html',
    controller: 'View3Ctrl'
  });
  $routeProvider.when('/Race', {
    templateUrl: 'view3/race.html',
    controller: 'View3Ctrl'
  });
}])

.controller('View3Ctrl', ['$scope', function($scope) {
	$scope.transportation = {
		title: 'Transportation',
		blurb: 'Lack of access to transportation exacerbates every single one of these factors, and creates barriers to accessing healthcare services.',
		chart: 'img/transportation.png'
	},
	$scope.violence = {
		title: 'Violence',
		blurb: 'Baltimore is now rated second in the U.S., behind Detroit, in the highest number of homicides.',
		chart: 'img/homicide.png'
	},
	$scope.poverty = {
		title: 'Poverty',
		blurb: 'Lower income is tied to worse health outcomes, and about a quarter of Baltimore residents live in poverty.',
		chart: 'img/poverty.png'
	},
	$scope.disease = {
		title: 'Disease',
		blurb: 'West Baltimore residents suffer from certain health conditions disproportionately, and are hospitalized more frequently.',
		chart: 'img/disease.png'
	},
	$scope.education = {
		title: 'Education',
		blurb: 'Education and health are closely linked. Baltimore City sees fewer high school graduates -- less than 60 percent -- than anywhere in the state.',
		chart: 'img/graduation-rate.png'
	},
	$scope.race = {
		title: 'Race',
		blurb: 'Baltimore City is racially divided, and its poorest neighborhoods are largely black.',
		chart: ''
	}
}]);
