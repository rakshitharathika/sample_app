(function () {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.test:blogsTest
	 * @description
	 * # blogsTest
	 * Test of the app
	 */

	describe('blogs test', function () {
		var controller = null, $scope = null;

		beforeEach(function () {
			module('balaji');
		});

		beforeEach(inject(function ($controller, $rootScope) {
			$scope = $rootScope.$new();
			controller = $controller('BlogsCtrl', {
				$scope: $scope
			});
		}));

		it('Should controller must be defined', function () {
			expect(controller).toBeDefined();
		});

	});
})();
