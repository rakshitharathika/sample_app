'use strict';

/**
 * @ngdoc function
 * @name app.route:departmentsRoute
 * @description
 * # departmentsRoute
 * Route of the app
 */

angular.module('departments')
	.config(['$stateProvider', function ($stateProvider) {
		
		$stateProvider
			.state('departments', {
				url:'/locations/:id/departments',
				templateUrl: 'app/modules/departments/departments.html',
				controller: 'DepartmentsCtrl',
				controllerAs: 'vm'
			});

			$stateProvider
			.state('departmentslist', {
				url:'/departmentslist',
				templateUrl: 'app/modules/departments/departmentslist.html',
				controller: 'DepartmentsCtrl',
				controllerAs: 'vm'
			});

			$stateProvider
			.state('departmentsedit', {
				url:'/departmentsedit/:id',
				templateUrl: 'app/modules/departments/departmentsedit.html',
				controller: 'DepartmentseditCtrl',
				controllerAs: 'vm'
			});


			$stateProvider
			.state('departmentsshow', {
				url:'/departmentsshow/:id',
				templateUrl: 'app/modules/departments/departmentsshow.html',
				controller: 'DepartmentsshowCtrl',
				controllerAs: 'vm'
			});
		
		
	}]);
