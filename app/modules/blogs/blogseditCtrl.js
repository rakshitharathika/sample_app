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
		.controller('BlogseditCtrl', Blogsedit);

		Blogsedit.$inject = ['BlogsService','$scope', '$stateParams', '$log', '$rootScope','$cookies', '$state','$timeout'];

		/*
		* recommend
		* Using function declarations
		* and bindable members up top.
		*/

		function Blogsedit(BlogsService,  $scope, $stateParams, $log, $rootScope, $cookies, $state,$timeout) {
			/*jshint validthis: true */
			var vm = this;
 
	
       vm.blog_id = $stateParams.id;
            debugger
		BlogsService.blogShow(vm.blog_id).then(function (response) {
         vm.showblog=response;
		});


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
            












          vm.editblog=function(){
		debugger
			BlogsService.geteditblog(vm.showblog).then(function (response) {
			
         vm.editblog=response;
         
         $state.go('blogslist');

		});

}
		}

})();
