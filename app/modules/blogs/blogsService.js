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
  .module('blogs')
  .service('BlogsService', function($http, UserAjax) {

           
           this.bloguser =  function () {
    
           return UserAjax.request('GET', '/users.json', {}).then(function (response) {
           // if(!response)
           //  response = {};
           return response.data;
        });
      };
          
         
           this.blogcategories =  function () {
   
           return UserAjax.request('GET', '/categories.json', {}).then(function (response) {
           // if(!response)
           //  response = {};
           return response.data;
        });
      };


   
          
           this.blogtags =  function () {
    
           return UserAjax.request('GET', '/tags.json', {}).then(function (response) {
           // if(!response)
           //  response = {};
           return response.data;
        });
      };


  
         
           this.bloglocation =  function () {
   
           return UserAjax.request('GET', '/locations.json', {}).then(function (response) {
           // if(!response)
           //  response = {};
           return response.data;
        });
      };


     
         
           this.blogdept =  function () {
  
           return UserAjax.request('GET', '/departments.json', {}).then(function (response) {
           // if(!response)
           //  response = {};
           return response.data;
        });
      };


     
         
           this.blogteam =  function () {
   
           return UserAjax.request('GET', '/teams.json', {}).then(function (response) {
           // if(!response)
           //  response = {};
           return response.data;
        });
      };








          
      this.blogsSample =  function (newblog) {
        
           return UserAjax.request('POST', '/blogs.json', newblog).then(function (response) {
           // if(!response)
          
           //  response = {};
           return response.data;
        });
      };


       this.getblog =  function () {
       
           return UserAjax.request('GET', '/blogs.json', {}).then(function (response) {
           // if(!response)
           //  response = {};
           return response.data;
        });
      };

  debugger
          
       this.blogShow =  function (blog_id) {
        debugger
           return UserAjax.request('GET', '/blogs/' + blog_id + '.json', {}).then(function (response) {
           // if(!response)
           //  response = {};
           return response.data;
        });
      };

       debugger
       this.geteditblog =  function (showblog) {
        debugger
           return UserAjax.request('PUT', '/blogs/' + showblog.id + '.json', showblog).then(function (response) {
           // if(!response)
           //  response = {};
           return response.data;
        });
      };
 });    

})();



