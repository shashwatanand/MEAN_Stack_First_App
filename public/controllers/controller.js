/*function AppCtrl() {
	console.log("Hello world from controller");
}*/

var meanApp = angular.module("meanApp", []);
meanApp.controller('AppCtrl', ['$scope', '$http', function(){
	console.log("Hello world from controller");
}]);