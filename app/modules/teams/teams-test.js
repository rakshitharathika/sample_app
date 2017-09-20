(function () {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.test:teamsTest
	 * @description
	 * # teamsTest
	 * Test of the app
	 */

	describe('teams test', function () {
		var controller = null, $scope = null;

		beforeEach(function () {
			module('balaji');
		});

		beforeEach(inject(function ($controller, $rootScope) {
			$scope = $rootScope.$new();
			controller = $controller('TeamsCtrl', {
				$scope: $scope
			});
		}));

		it('Should controller must be defined', function () {
			expect(controller).toBeDefined();
		});

	});
})();
