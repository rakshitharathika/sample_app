'use strict';

/**
 * @ngdoc function
 * @name app.route:locationsRoute
 * @description
 * # locationsRoute
 * Route of the app
 */

angular.module('locations')
	.config(['$stateProvider', function ($stateProvider) {
		
		$stateProvider
			.state('locations', {
				url:'/locations',
				templateUrl: 'app/modules/locations/locations.html',
				controller: 'LocationsCtrl',
				controllerAs: 'vm'
			})
			$stateProvider
			.state('locationslist', {
				url:'/locationslist',
				templateUrl: 'app/modules/locations/locationslist.html',
				controller: 'LocationsCtrl',
				controllerAs: 'vm'
			})
			$stateProvider
			.state('locationsshow', {
				url:'/locationsshow/:id',
				templateUrl: 'app/modules/locations/locationsshow.html',
				controller: 'LocationsshowCtrl',
				controllerAs: 'vm'
			});
		
		$stateProvider
			.state('locationsedit', {
				url:'/locationsedit/:id',
				templateUrl: 'app/modules/locations/locationsedit.html',
				controller: 'LocationseditCtrl',
				controllerAs: 'vm'
			});
		
		
	}]);
