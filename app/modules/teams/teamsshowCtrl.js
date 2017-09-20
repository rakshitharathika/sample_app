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
		.controller('TeamsshowCtrl', Teams);

		Teams.$inject = ['TeamsService','$scope', '$stateParams', '$log', '$rootScope','$cookies', '$state','$timeout'];

		
		// * recommend
		// * Using function declarations
		// * and bindable members up top.
		

		function Teams(TeamsService,  $scope, $stateParams, $log, $rootScope, $cookies, $state,$timeout) {
			/*jshint validthis: true */
			var vm = this;

		 vm.team_id = $stateParams.id;
            debugger
		TeamsService.teamShow(vm.team_id).then(function (response) {
         vm.team=response;
		});
	}

})();
