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
		.controller('LocationsCtrl', Locations);

		Locations.$inject = ['LocationsService','$scope', '$stateParams', '$log', '$rootScope','$cookies', '$state','$timeout'];

		/*
		* recommend
		* Using function declarations
		* and bindable members up top.
		*/

		function Locations(LocationsService,  $scope, $stateParams, $log, $rootScope, $cookies, $state,$timeout) {
			/*jshint validthis: true */
			var vm = this;

        debugger
        // vm.location_id = $stateParams.id;
			vm.createlocations=function(){
			debugger
				LocationsService.locationsSample(vm.location).then(function (response) {
         vm.locations=response;
         $state.go('locationslist');
			});

		};
		
debugger
		LocationsService.getlocation().then(function (response) {
         vm.locations=response;
          
          // $state.go('createlist');
    });

		}

})();
