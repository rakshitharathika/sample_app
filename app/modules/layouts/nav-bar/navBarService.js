(function() {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.service:menuService
	 * @description
	 * # menuService
	 * Service of the app
	 */

  	angular
		.module('balaji')
		.factory('MenuService', Menu);
		// Inject your dependencies as .$inject = ['$http', 'someSevide'];
		// function Name ($http, someSevide) {...}

		Menu.$inject = ['$http'];

		function Menu ($http) {

			var menu = [
				
					{
						link: 'createuser',
							name: 'Createuser'
					},
			    
					{
						link: 'categories',
							name: 'Categories'
					},
			    
					{
						link: 'tags',
							name: 'Tags'
					},
			    
					{
						link: 'locations',
							name: 'Locations'
					},
			    
					{
						link: 'departments',
							name: 'Departments'
					},
			    
					{
						link: 'teams',
							name: 'Teams'
					},
			    
					{
						link: 'blogs',
							name: 'Blogs'
					},
			    
		  	];

			return {
				listMenu: function () {
					return menu;
				}
		  	}

		}

})();
