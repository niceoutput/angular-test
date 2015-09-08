/**
*  Module
*
* Description
*/
angular.module('directoryApp', [])
	.controller('directoryController', function(){

		var dirList = this;

		dirList.list = [
			
			{name:'Monteiro', role: 'Full Stack Unicorn', age: 20}, 
			{name:'Gibão', role:'Core Magician', age: 25}, 
			{name:'Aragão', role:'Translations Pimp', age: 25}, 
			{name:'Ribeiro', role:'Deploy Arquitect', age: 23}
			
			];

			dirList.addPerson = function() {
				dirList.list.push({name: dirList.name, role: dirList.role});
				dirList.name = '';
				dirList.role = '';
			};
	});