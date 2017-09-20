(function() {
	'use strict';

	/**
	 * @ngdoc index
	 * @name app
	 * @description
	 * # app
	 *
	 * Main modules of the application.
	 */

	angular.module('balaji', [
		'ngResource',
		'ngAria',
		 'ui.bootstrap',
		
		'ngCookies',
		'ngAnimate',
		'ngTouch',
		'ngSanitize',
		'ui.router',
		'home',
		'createuser',
		'categories',
		'tags',
		'locations',
		'departments',
		'teams',
		'blogs',
	]);

})();
