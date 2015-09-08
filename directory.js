/**
*  Module
*
* Description
*/
angular.module('directoryApp', [])
	.controller('directoryController', function($scope){
		$scope.list = [
			
			{name:'Monteiro', role: 'Full Stack Unicorn', age: 20}, 
			{name:'Gibão', role:'Core Magician', age: 25}, 
			{name:'Aragão', role:'Translations Pimp', age: 25}, 
			{name:'Ribeiro', role:'Deploy Arquitect', age: 23}
			
			];

			$scope.addPerson = function() {
				$scope.list.push({name: $scope.name, role: $scope.role});
				$scope.name = '';
				$scope.role = '';
			};
	});