(function() {
	'use strict';

	/**
	* @ngdoc function
	* @name app.controller:teamsCtrl
	* @description
	* # teamsCtrl
	* Controller of the app
	*/

  	angular
		.module('teams')
		.controller('TeamseditCtrl', Teams);

		Teams.$inject = ['TeamsService','$scope', '$stateParams', '$log', '$rootScope','$cookies', '$state','$timeout'];

		/*
		* recommend
		* Using function declarations
		* and bindable members up top.
		*/

		function Teams(TeamsService,  $scope, $stateParams, $log, $rootScope, $cookies, $state,$timeout) {
			/*jshint validthis: true */
			var vm = this;

		
		 vm.team_id = $stateParams.id;
            debugger
		TeamsService.teamShow(vm.team_id).then(function (response) {
         vm.team=response;
		});

				debugger
             TeamsService.getdept().then(function (response) {
        vm.departments=response;
          
          // $state.go('createlist');
    });
	
		debugger
		vm.editteam=function(){
		debugger
			TeamsService.geteditteam(vm.team).then(function (response) {
			
         vm.editteam=response;
         
         $state.go('teamslist');

		});

     
	};
		}

})();
