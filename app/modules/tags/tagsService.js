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
  .module('tags')
  .service('TagsService', function($http, UserAjax) {
      this.tagSample =  function (tags) {
        
           return UserAjax.request('POST', '/tags.json', tags).then(function (response) {
           // if(!response)
          
           //  response = {};
           return response.data;
        });
      };

         
       this.gettags =  function () {
      
           return UserAjax.request('GET', '/tags.json', {}).then(function (response) {
           // if(!response)
           //  response = {};
           return response.data;
        });
      };

    
          debugger
       this.gettagsShow =  function (tags_id) {
      debugger
           return UserAjax.request('GET', '/tags/' + tags_id + '.json', {}).then(function (response) {
           // if(!response)
           //  response = {};
           return response.data;
        });
      };

       debugger
       this.getedittags =  function (tags) {
        debugger
           return UserAjax.request('PUT', '/tags/' + tags.id + '.json', tags).then(function (response) {
           // if(!response)
           //  response = {};
           return response.data;
        });
      };
 });    

})();



