'use strict';

/**
 * @ngdoc function
 * @name app.route:tagsRoute
 * @description
 * # tagsRoute
 * Route of the app
 */

angular.module('tags')
	.config(['$stateProvider', function ($stateProvider) {
		
		$stateProvider
			.state('tags', {
				url:'/tags',
				templateUrl: 'app/modules/tags/tags.html',
				controller: 'TagsCtrl',
				controllerAs: 'vm'
			})
			$stateProvider
			.state('tagslist', {
				url:'/tagslist',
				templateUrl: 'app/modules/tags/tagslist.html',
				controller: 'TagsCtrl',
				controllerAs: 'vm'
			});
			$stateProvider
			.state('tagsedit', {
				url:'/tagsedit/:id',
				templateUrl: 'app/modules/tags/tagsedit.html',
				controller: 'TagseditCtrl',
				controllerAs: 'vm'
			});
			$stateProvider
			.state('tagsshow', {
				url:'/tagsshow/:id',
				templateUrl: 'app/modules/tags/tagsshow.html',
				controller: 'TagsshowCtrl',
				controllerAs: 'vm'
			});
		
	}]);
