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
		.controller('LocationseditCtrl', Locations);

		Locations.$inject = ['LocationsService','$scope', '$stateParams', '$log', '$rootScope','$cookies', '$state','$timeout'];

		/*
		* recommend
		* Using function declarations
		* and bindable members up top.
		*/

		function Locations(LocationsService,  $scope, $stateParams, $log, $rootScope, $cookies, $state,$timeout) {
			/*jshint validthis: true */
			var vm = this;


			 vm.location_id = $stateParams.id;
            
		LocationsService.getlocationsShow(vm.location_id).then(function (response) {
         vm.location=response;
          
          // $state.go('createlist');
    });

		debugger
		vm.editlocation=function(){
		debugger
			LocationsService.geteditlocations( vm.location).then(function (response) {
			
         vm.edit=response;
         $state.go('locationslist');

		});

     
	};

		}

})();
