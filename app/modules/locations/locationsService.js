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
  .module('locations')
  .service('LocationsService', function($http, UserAjax) {
      this.locationsSample =  function (location) {
      debugger
           return UserAjax.request('POST', '/locations.json', location).then(function (response) {
           // if(!response)
           debugger
           //  response = {};
           return response.data;
        });
      };


       this.getlocation =  function () {
      
           return UserAjax.request('GET', '/locations.json', {}).then(function (response) {
           // if(!response)
           //  response = {};
           return response.data;
        });
      };


          
       this.getlocationsShow =  function (location_id) {
        
           return UserAjax.request('GET', '/locations/' + location_id + '.json', {}).then(function (response) {
           // if(!response)
           //  response = {};
           return response.data;
        });
      };

       debugger
       this.geteditlocations =  function (location) {
        debugger
           return UserAjax.request('PUT', '/locations/' + location.id + '.json', location).then(function (response) {
           if(!response)
            response = {};
           return response.data;
        });
      };
 });    

})();



