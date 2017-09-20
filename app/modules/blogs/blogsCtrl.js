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
		.controller('BlogsCtrl', Blogs);

		Blogs.$inject = ['BlogsService','$scope', '$stateParams', '$log', '$rootScope','$cookies', '$state','$timeout'];

		/*
		* recommend
		* Using function declarations
		* and bindable members up top.
		*/

		function Blogs(BlogsService,  $scope, $stateParams, $log, $rootScope, $cookies, $state,$timeout) {
			/*jshint validthis: true */
			var vm = this;
 
			    BlogsService.bloguser().then(function (response) {
         vm.users=response;
          
          // $state.go('createlist');
    });
              	
			    BlogsService.blogcategories().then(function (response) {
         vm.categorieses=response;
          
          // $state.go('createlist');
    });

			    BlogsService.blogtags().then(function (response) {
         vm.tag=response;
          
          // $state.go('createlist');
    });

			    BlogsService.bloglocation().then(function (response) {
         vm.locations=response;
          
          // $state.go('createlist');
    });  

			    

			    BlogsService.blogdept().then(function (response) {
         vm.departments=response;
          
          // $state.go('createlist');
    });
            
                BlogsService.blogteam().then(function (response) {
         vm.teams=response;
          
          // $state.go('createlist');
    });
            
            debugger
				vm.createblog=function(){
			debugger
				BlogsService.blogsSample(vm.newblog).then(function (response) {
         vm.blogs=response;

         $state.go('blogslist');

			});



			}



              
					BlogsService.getblog().then(function (response) {
					
         vm.blog=response;
         // $state.go('createlist');
			});
		
	

		}

})();
