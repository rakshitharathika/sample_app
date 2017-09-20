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
		.controller('CategorieseditCtrl', Categoriesedit);

		Categoriesedit.$inject = ['CategoriesService','$scope', '$stateParams', '$log', '$rootScope','$cookies', '$state','$timeout'];

		/*
		* recommend
		* Using function declarations
		* and bindable members up top.
		*/

		function Categoriesedit(CategoriesService,  $scope, $stateParams, $log, $rootScope, $cookies, $state,$timeout) {
			/*jshint validthis: true */
			var vm = this;
		
		
		vm.categories_id = $stateParams.id;
            
		CategoriesService.getcategoriesShow(vm.categories_id).then(function (response) {
         vm.categories=response;
          
		});
		debugger
		vm.editcategories=function(){
		debugger
			CategoriesService.geteditcategories(vm.categories).then(function (response) {
			
         vm.editcategories=response;

         $state.go('categorieslist');

		});

     
	};
};


})();
