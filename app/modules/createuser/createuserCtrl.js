(function() {
	'use strict';

	/**
	* @ngdoc function
	* @name app.controller:createuserCtrl
	* @description
	* # createuserCtrl
	* Controller of the app
	*/

  	angular
		.module('createuser')
		.controller('CreateuserCtrl', Createuser);

		Createuser.$inject = ['CreateuserService','$scope', '$stateParams', '$log', '$rootScope','$cookies', '$state','$timeout'];

		/*
		* recommend
		* Using function declarations
		* and bindable members up top.
		*/

		function Createuser(CreateuserService,  $scope, $stateParams, $log, $rootScope, $cookies, $state,$timeout) {
			/*jshint validthis: true */
			var vm = this;
			
			vm.createuser=function(){
			debugger
				CreateuserService.Sample(vm.user).then(function (response) {
         vm.users=response;
         $state.go('createlist');
			});

		};

		CreateuserService.getSample().then(function (response) {
         vm.users=response;
          
          // $state.go('createlist');
    });
		// vm.manage = function(id){
  //     $cookies.put('user_id', id);
  //     vm.getStateParams = $cookies.get('user_id');
  //   }

   
	};

})();
