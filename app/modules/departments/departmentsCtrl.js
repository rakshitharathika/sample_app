(function() {
	'use strict';

	/**
	* @ngdoc function
	* @name app.controller:departmentsCtrl
	* @description
	* # departmentsCtrl
	* Controller of the app
	*/

  	angular
		.module('departments')
		.controller('DepartmentsCtrl', Departments);

		Departments.$inject = ['DepartmentsService','$scope', '$stateParams', '$log', '$rootScope','$cookies', '$state','$timeout'];

		/*
		* recommend
		* Using function declarations
		* and bindable members up top.
		*/

		function Departments(DepartmentsService,  $scope, $stateParams, $log, $rootScope, $cookies, $state,$timeout) {
			/*jshint validthis: true */
			var vm = this;

			debugger
             DepartmentsService.getlocation().then(function (response) {
         vm.locations=response;
          
          // $state.go('createlist');
    });


			vm.createdepartments=function(){
				debugger
	             // var params={};
	          // params.department=vm.department;
	          // vm.department.location.id=$stateParams.id;
			 DepartmentsService.departmentsSample(vm.department).then(function (response) {
           vm.departments=response;
            $state.go('departmentslist');
			});

		};
            debugger
		DepartmentsService.getdepartment().then(function (response) {
         vm.departments=response;
          
          // $state.go('createlist');
    });

		}

})();
