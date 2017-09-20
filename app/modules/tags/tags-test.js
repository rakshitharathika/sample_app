(function () {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.test:tagsTest
	 * @description
	 * # tagsTest
	 * Test of the app
	 */

	describe('tags test', function () {
		var controller = null, $scope = null;

		beforeEach(function () {
			module('balaji');
		});

		beforeEach(inject(function ($controller, $rootScope) {
			$scope = $rootScope.$new();
			controller = $controller('TagsCtrl', {
				$scope: $scope
			});
		}));

		it('Should controller must be defined', function () {
			expect(controller).toBeDefined();
		});

	});
})();
