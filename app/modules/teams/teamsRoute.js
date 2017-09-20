'use strict';

/**
 * @ngdoc function
 * @name app.route:teamsRoute
 * @description
 * # teamsRoute
 * Route of the app
 */

angular.module('teams')
	.config(['$stateProvider', function ($stateProvider) {
		
		$stateProvider
			.state('teams', {
				url:'/departments/:id/teams',
				templateUrl: 'app/modules/teams/teams.html',
				controller: 'TeamsCtrl',
				controllerAs: 'vm'
			})
		

		$stateProvider
			.state('teamslist', {
				url:'/teamslist',
				templateUrl: 'app/modules/teams/teamslist.html',
				controller: 'TeamsCtrl',
				controllerAs: 'vm'
			});


			$stateProvider
			.state('teamsshow', {
				url:'/teamsshow/:id',
				templateUrl: 'app/modules/teams/teamsshow.html',
				controller: 'TeamsshowCtrl',
				controllerAs: 'vm'
			});


			$stateProvider
			.state('teamsedit', {
				url:'/teamsedit/:id',
				templateUrl: 'app/modules/teams/teamsedit.html',
				controller: 'TeamseditCtrl',
				controllerAs: 'vm'
			});
		
	}]);
