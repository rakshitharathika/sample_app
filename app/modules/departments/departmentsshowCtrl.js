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
		.controller('DepartmentsshowCtrl', Departmentsshow);

		Departmentsshow.$inject = ['DepartmentsService','$scope', '$stateParams', '$log', '$rootScope','$cookies', '$state','$timeout'];

		
		// * recommend
		// * Using function declarations
		// * and bindable members up top.
		

		function Departmentsshow(DepartmentsService,  $scope, $stateParams, $log, $rootScope, $cookies, $state,$timeout) {
			/*jshint validthis: true */
			var vm = this;


		
		debugger
           vm.dept_id = $stateParams.id;
            debugger
		DepartmentsService.deptShow(vm.dept_id).then(function (response) {
         vm.department=response;
          
          // $state.go('createlist');
    });

		}

})();
