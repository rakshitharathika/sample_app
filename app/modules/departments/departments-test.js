(function () {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.test:departmentsTest
	 * @description
	 * # departmentsTest
	 * Test of the app
	 */

	describe('departments test', function () {
		var controller = null, $scope = null;

		beforeEach(function () {
			module('balaji');
		});

		beforeEach(inject(function ($controller, $rootScope) {
			$scope = $rootScope.$new();
			controller = $controller('DepartmentsCtrl', {
				$scope: $scope
			});
		}));

		it('Should controller must be defined', function () {
			expect(controller).toBeDefined();
		});

	});
})();
