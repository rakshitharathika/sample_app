(function() {
	'use strict';

	/**
	* @ngdoc function
	* @name app.controller:blogsCtrl
	* @description
	* # blogsCtrl
	* Controller of the app
	*/

  	angular
		.module('blogs')
		.controller('BlogsshowCtrl', Blogshow);

		Blogshow.$inject = ['BlogsService','$scope', '$stateParams', '$log', '$rootScope','$cookies', '$state','$timeout'];

		/*
		* recommend
		* Using function declarations
		* and bindable members up top.
		*/

		function Blogshow(BlogsService,  $scope, $stateParams, $log, $rootScope, $cookies, $state,$timeout) {
			/*jshint validthis: true */
			var vm = this;
 
	
       vm.blog_id = $stateParams.id;
            debugger
		BlogsService.blogShow(vm.blog_id).then(function (response) {
         vm.showblog=response;
		});
		}

})();
