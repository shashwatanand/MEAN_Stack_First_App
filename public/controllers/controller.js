/*function AppCtrl() {
	console.log("Hello world from controller");
}*/

var meanApp = angular.module("meanApp", []);
meanApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http){
	//console.log("Hello world from controller");

	$http.get('/studentList').success(function(response){
		$scope.studentList = response;
	});

	$scope.addStudent = function() {
		console.log($scope.student);
		$http.post('/studentList', $scope.student);
	};
}]);