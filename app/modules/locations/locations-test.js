(function () {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.test:locationsTest
	 * @description
	 * # locationsTest
	 * Test of the app
	 */

	describe('locations test', function () {
		var controller = null, $scope = null;

		beforeEach(function () {
			module('balaji');
		});

		beforeEach(inject(function ($controller, $rootScope) {
			$scope = $rootScope.$new();
			controller = $controller('LocationsCtrl', {
				$scope: $scope
			});
		}));

		it('Should controller must be defined', function () {
			expect(controller).toBeDefined();
		});

	});
})();
