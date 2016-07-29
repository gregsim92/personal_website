webApp.controller('mainController', ['$scope','$http',
							 function($scope,$http){
	$scope.name = 'Greg Simpson';
	$scope.personalStatement = 'hello';

	$scope.project1 = 'Tetris Clone';
	$scope.project1descript = 'Tetris Clone';
	
	$scope.project2 = 'Cool Forums';
	$scope.project3 = 'Sentimeta';
	$scope.project4 = 'Pixel Tapestry';

}]);