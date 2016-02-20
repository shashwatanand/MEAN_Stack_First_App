/*function AppCtrl() {
	console.log("Hello world from controller");
}*/

var meanApp = angular.module("meanApp", []);
meanApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http){
	//console.log("Hello world from controller");

	var refresh = function() {
		$http.get('/studentList').success(function(response){
			$scope.studentList = response;
			$scope.student = "";
		});
	};
	refresh();

	$scope.addStudent = function() {
		console.log($scope.student);
		$http.post('/studentList', $scope.student).success(function(response){
			console.log(response);
			refresh();
		});
	};

	$scope.remove = function(recordId) {
		console.log(recordId);
		$http.delete('/studentList/' + recordId).success(function(response){
			refresh();
		});
	};

	$scope.edit = function(recordId) {
		console.log(recordId);
		$http.get('/studentList/' + recordId).success(function(response){
			$scope.student = response;
		});
	};

	$scope.update = function() {
		console.log($scope.student._id);
		$http.put('/studentList/' + $scope.student._id, $scope.student).success(function(response){
			refresh();
		});
	};

	$scope.deselect = function() {
		$scope.student = "";
	}
}]);