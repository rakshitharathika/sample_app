'use strict';

/**
 * @ngdoc function
 * @name app.route:blogsRoute
 * @description
 * # blogsRoute
 * Route of the app
 */

angular.module('blogs')
	.config(['$stateProvider', function ($stateProvider) {
		
		$stateProvider
			.state('blogs', {
				url:'/blogs',
				templateUrl: 'app/modules/blogs/blogs.html',
				controller: 'BlogsCtrl',
				controllerAs: 'vm'
			});
		


		$stateProvider
			.state('blogslist', {
				url:'/blogslist',
				templateUrl: 'app/modules/blogs/blogslist.html',
				controller: 'BlogsCtrl',
				controllerAs: 'vm'
			});


		$stateProvider
			.state('blogsshow', {
				url:'/blogsshow/:id',
				templateUrl: 'app/modules/blogs/blogsshow.html',
				controller: 'BlogsshowCtrl',
				controllerAs: 'vm'
			});



		$stateProvider
			.state('blogsedit', {
				url:'/blogsedit/:id',
				templateUrl: 'app/modules/blogs/blogsedit.html',
				controller: 'BlogseditCtrl',
				controllerAs: 'vm'
			});
	}]);
