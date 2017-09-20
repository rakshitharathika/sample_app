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
		.controller('TeamsCtrl', Teams);

		Teams.$inject = ['TeamsService','$scope', '$stateParams', '$log', '$rootScope','$cookies', '$state','$timeout'];

		/*
		* recommend
		* Using function declarations
		* and bindable members up top.
		*/

		function Teams(TeamsService,  $scope, $stateParams, $log, $rootScope, $cookies, $state,$timeout) {
			/*jshint validthis: true */
			var vm = this;

				debugger
             TeamsService.getdept().then(function (response) {
        vm.departments=response;
          
          // $state.go('createlist');
    });


			vm.creatteams=function(){
				debugger
	             // var params={};
	          // params.department=vm.department;
	          // vm.department.location.id=$stateParams.id;
				TeamsService.teamsSample(vm.team).then(function (response) {
           vm.teams=response;
            $state.go('teamslist');
			});

		};
            debugger
		TeamsService.getteam().then(function (response) {
         vm.teams=response;
          
          // $state.go('createlist');
    });

		}

})();
