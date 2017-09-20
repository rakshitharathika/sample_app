(function() {
	'use strict';

	/**
	* @ngdoc function
	* @name app.controller:categoriesCtrl
	* @description
	* # categoriesCtrl
	* Controller of the app
	*/

  	angular
		.module('categories')
		.controller('CategoriesCtrl', Categories);

		Categories.$inject = ['CategoriesService','$scope', '$stateParams', '$log', '$rootScope','$cookies', '$state','$timeout'];

		/*
		* recommend
		* Using function declarations
		* and bindable members up top.
		*/

		function Categories(CategoriesService,  $scope, $stateParams, $log, $rootScope, $cookies, $state,$timeout) {
			/*jshint validthis: true */
			var vm = this;
		
			vm.createcategories=function(){
			
				CategoriesService.categoriesSample(vm.categories).then(function (response) {
         vm.category=response;
         $state.go('categorieslist');
			});
			}
                debugger
					CategoriesService.getcategories().then(function (response) {
					
         vm.categorieses=response;
         // $state.go('createlist');
			});
		
	}

})();
