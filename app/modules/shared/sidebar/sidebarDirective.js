(function() {
	'use strict';

	/**
	* @ngdoc function
	* @name app.controller:sidebarDirective
	* @description
	* # sidebarDirective
	* Directive of the app
	*/

	angular
		.module('balaji')
		.directive('sidebar', sidebar);

		function sidebar () {

			var directive = {
				link: link,
				restrict: 'EA',
				controller: 'SidebarCtrl',
				
				templateUrl:'app/modules/shared/directives/sidebar/sidebar.html',
				
			}

			return directive;

			function link(scope, element, attrs) {
				// write your code here
			}

		}

})();
