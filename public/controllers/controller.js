/*function AppCtrl() {
	console.log("Hello world from controller");
}*/

var meanApp = angular.module("meanApp", []);
meanApp.controller('AppCtrl', ['$scope', '$http', function($scope){
	console.log("Hello world from controller");


	student1 = {
		firstName: 'Manish',
		lastName: 'Chahar',
		id: '1'
	};

	student2 = {
		firstName: 'Shashwat',
		lastName: 'Anand',
		id: '4'
	};

	student3 = {
		firstName: 'Shubhangi',
		lastName: 'Sinha',
		id: '2'
	};

	var studentList = [student1, student2, student3];
	$scope.studentList = studentList;
}]);