var webApp = angular.module('webApp', ['ngRoute']);

webApp.config(function($routeProvider){
	$routeProvider
		.when('/',{
			templateUrl:'partials/index.html',
				controller:'mainController'
		})
		.when('/not-found',{
			templateUrl:'partials/error.html',
				controller:'mainController'
		})
		.otherwise({redirectTo:('/not-found')})
});