/**
*  Module
*
* Description
*/
angular.module('directoryApp', [])
	.controller('directoryController', function($scope){
		$scope.list = [
			
			{name:'Monteiro', role: 'Full Stack Unicorn'}, 
			{name:'Gibão', role:'Core Magician'}, 
			{name:'Aragão', role:'Translations Pimp'}, 
			{name:'Ribeiro', role:'Deploy Arquitect'}
			
			]
	});