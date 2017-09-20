(function() {
	'use strict';

	/**
	* @ngdoc function
	* @name app.controller:tagsCtrl
	* @description
	* # tagsCtrl
	* Controller of the app
	*/

  	angular
		.module('tags')
		.controller('TagseditCtrl', Tags);

		Tags.$inject = ['TagsService','$scope', '$stateParams', '$log', '$rootScope','$cookies', '$state','$timeout'];

		/*
		* recommend
		* Using function declarations
		* and bindable members up top.
		*/

		function Tags(TagsService,  $scope, $stateParams, $log, $rootScope, $cookies, $state,$timeout) {
			/*jshint validthis: true */
			var vm = this;

            	vm.tags_id = $stateParams.id;
           debugger 
		TagsService.gettagsShow(vm.tags_id).then(function (response) {
         vm.tags=response;
          
		});



debugger
			vm.edittags=function(){
		debugger
				TagsService.getedittags(vm.tags).then(function (response) {
         vm.tag=response;
         $state.go('tagslist');
			});
			}
         

		}

})();
