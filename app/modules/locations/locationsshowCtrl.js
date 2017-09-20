(function() {
	'use strict';

	/**
	* @ngdoc function
	* @name app.controller:locationsCtrl
	* @description
	* # locationsCtrl
	* Controller of the app
	*/

  	angular
		.module('locations')
		.controller('LocationsshowCtrl', Locationsshow);

		Locationsshow.$inject = ['LocationsService','$scope', '$stateParams', '$log', '$rootScope','$cookies', '$state','$timeout'];

		
		// * recommend
		// * Using function declarations
		// * and bindable members up top.
		

		function Locationsshow(LocationsService,  $scope, $stateParams, $log, $rootScope, $cookies, $state,$timeout) {
			/*jshint validthis: true */
			var vm = this;


		
		debugger
           vm.location_id = $stateParams.id;
            
		LocationsService.getlocationsShow(vm.location_id).then(function (response) {
         vm.location=response;
          
          // $state.go('createlist');
    });

		}

})();
