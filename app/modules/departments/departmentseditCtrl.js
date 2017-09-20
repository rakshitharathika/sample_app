(function() {
	'use strict';

	/**
	* @ngdoc function
	* @name app.controller:locationsCtrl
	* @description
	* # locationsCtrl
	* Controller of the app
	*/

  	angular
		.module('departments')
		.controller('DepartmentseditCtrl', departments);

		departments.$inject = ['DepartmentsService','$scope', '$stateParams', '$log', '$rootScope','$cookies', '$state','$timeout'];

		/*
		* recommend
		* Using function declarations
		* and bindable members up top.
		*/

		function departments(DepartmentsService,  $scope, $stateParams, $log, $rootScope, $cookies, $state,$timeout) {
			/*jshint validthis: true */
			var vm = this;


		  vm.dept_id = $stateParams.id;
            debugger
		DepartmentsService.deptShow(vm.dept_id).then(function (response) {
         vm.department=response;
          
          // $state.go('createlist');
    });


		 DepartmentsService.getlocation().then(function (response) {
         vm.locations=response;
          
          // $state.go('createlist');
    });
		debugger
		vm.editdept=function(){
		debugger
			DepartmentsService.geteditdept( vm.department).then(function (response) {
			
         vm.editdept=response;
         
         $state.go('departmentslist');

		});

     
	};

		}

})();
