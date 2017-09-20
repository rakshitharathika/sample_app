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
		.controller('CreateshowCtrl', Showuser);

		Showuser.$inject = ['CreateuserService','$scope', '$stateParams', '$log', '$rootScope','$cookies', '$state','$timeout'];

		/*
		* recommend
		* Using function declarations
		* and bindable members up top.
		*/

		function Showuser(CreateuserService,  $scope, $stateParams, $log, $rootScope, $cookies, $state,$timeout) {
			/*jshint validthis: true */
			var vm = this;
		
		vm.user_id = $stateParams.id;
            
		CreateuserService.getShow(vm.user_id).then(function (response) {
         vm.user=response;
          
          // $state.go('createlist');
    });

   
	};

})();
