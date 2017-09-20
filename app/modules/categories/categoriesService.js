
(function() {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.service:userService
	 * @description
	 * # userService
	 * Service of the app
	 */

  angular
  .module('categories')
  .service('CategoriesService', function($http, UserAjax) {
      this.categoriesSample =  function (categories) {
        
           return UserAjax.request('POST', '/categories.json', categories).then(function (response) {
           // if(!response)
           
           //  response = {};
           return response.data;
        });
      };

         
       this.getcategories =  function () {
      
           return UserAjax.request('GET', '/categories.json', {}).then(function (response) {
           // if(!response)
           //  response = {};
           return response.data;
        });
      };

    
          
       this.getcategoriesShow =  function (categories_id) {
      
           return UserAjax.request('GET', '/categories/' + categories_id + '.json', {}).then(function (response) {
           // if(!response)
           //  response = {};
           return response.data;
        });
      };

       debugger
       this.geteditcategories =  function (categories) {
        debugger
           return UserAjax.request('PUT', '/categories/' + categories.id + '.json', categories).then(function (response) {
           // if(!response)
           //  response = {};
           return response.data;
        });
      };
 });    

})();



