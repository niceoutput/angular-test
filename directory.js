/**
*  Module
*
* Description
*/
angular.module('directoryApp', [])
	.controller('directoryController', function(){

		var dirList = this;

		dirList.toggle = false;

		dirList.list = [
			
			{name:'Monteiro', role: 'Full Stack Unicorn', age: 20, img: 'http://api.adorable.io/avatars/200/abott@adorable.io.png'}, 
			{name:'Gibão', role:'Core Magician', age: 25, img: 'http://api.adorable.io/avatars/200/swa@adorable.io.png'}, 
			{name:'Aragão', role:'Translations Pimp', age: 25, img: 'http://api.adorable.io/avatars/200/abott@adorable.io.png'}, 
			{name:'Ribeiro', role:'Deploy Arquitect', age: 23, img: 'http://api.adorable.io/avatars/200/abott@adorable.io.png'}
			
			];

			dirList.addPerson = function() {
				dirList.list.push({name: dirList.name, role: dirList.role});
				dirList.name = '';
				dirList.role = '';
			};
	});