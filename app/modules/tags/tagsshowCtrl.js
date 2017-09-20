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
		.controller('TagsshowCtrl', Tagsshow);

		Tagsshow.$inject = ['TagsService','$scope', '$stateParams', '$log', '$rootScope','$cookies', '$state','$timeout'];

		/*
		* recommend
		* Using function declarations
		* and bindable members up top.
		*/

		function Tagsshow(TagsService,  $scope, $stateParams, $log, $rootScope, $cookies, $state,$timeout) {
			/*jshint validthis: true */
			var vm = this;
debugger
			vm.tags_id = $stateParams.id;
           debugger 
		TagsService.gettagsShow(vm.tags_id).then(function (response) {
         vm.tags=response;
          
		});

		}

})();
