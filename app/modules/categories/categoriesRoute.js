'use strict';

/**
 * @ngdoc function
 * @name app.route:categoriesRoute
 * @description
 * # categoriesRoute
 * Route of the app
 */

angular.module('categories')
	.config(['$stateProvider', function ($stateProvider) {
		
		$stateProvider
			.state('categories', {
				url:'/categories',
				templateUrl: 'app/modules/categories/categories.html',
				controller: 'CategoriesCtrl',
				controllerAs: 'vm'
			})

			$stateProvider
			.state('categorieslist', {
				url:'/categorieslist',
				templateUrl: 'app/modules/categories/categorieslist.html',
				controller: 'CategoriesCtrl',
				controllerAs: 'vm'
			})



			$stateProvider
			.state('categoriesshow', {
				url:'/categoriesshow/:id',
				templateUrl: 'app/modules/categories/categoriesshow.html',
				controller: 'CategoriesshowCtrl',
				controllerAs: 'vm'
			});



			$stateProvider
			.state('categoriesedit', {
				url:'/categoriesedit/:id',
				templateUrl: 'app/modules/categories/categoriesedit.html',
				controller: 'CategorieseditCtrl',
				controllerAs: 'vm'
			});
		
	}]);
