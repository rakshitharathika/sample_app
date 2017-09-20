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
		.controller('TagsCtrl', Tags);

		Tags.$inject = ['TagsService','$scope', '$stateParams', '$log', '$rootScope','$cookies', '$state','$timeout'];

		/*
		* recommend
		* Using function declarations
		* and bindable members up top.
		*/

		function Tags(TagsService,  $scope, $stateParams, $log, $rootScope, $cookies, $state,$timeout) {
			/*jshint validthis: true */
			var vm = this;

			vm.createtags=function(){
		
				TagsService.tagSample(vm.tags).then(function (response) {
         vm.tag=response;
         // $state.go('taglist');
			});
			}
                debugger
					TagsService.gettags().then(function (response) {
					
         vm.tags=response;
         // $state.go('createlist');
			});

		}

})();
