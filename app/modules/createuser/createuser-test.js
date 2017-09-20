(function () {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.test:createuserTest
	 * @description
	 * # createuserTest
	 * Test of the app
	 */

	describe('createuser test', function () {
		var controller = null, $scope = null;

		beforeEach(function () {
			module('balaji');
		});

		beforeEach(inject(function ($controller, $rootScope) {
			$scope = $rootScope.$new();
			controller = $controller('CreateuserCtrl', {
				$scope: $scope
			});
		}));

		it('Should controller must be defined', function () {
			expect(controller).toBeDefined();
		});

	});
})();
