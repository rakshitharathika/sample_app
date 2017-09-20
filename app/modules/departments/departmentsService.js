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
  .module('departments')
  .service('DepartmentsService', function($http, UserAjax) {

         
           this.getlocation =  function () {
      
           return UserAjax.request('GET', '/locations.json', {}).then(function (response) {
           // if(!response)
           //  response = {};
           return response.data;
        });
      };







      this.departmentsSample =  function (department) {
        debugger
           return UserAjax.request('POST', '/departments.json', department).then(function (response) {
           // if(!response)
           debugger
           //  response = {};
           return response.data;
        });
      };


       this.getdepartment =  function () {
           return UserAjax.request('GET', '/departments.json', {}).then(function (response) {
           // if(!response)
           //  response = {};
           return response.data;
        });
      };

  debugger
          
       this.deptShow =  function (dept_id) {
        debugger
           return UserAjax.request('GET', '/departments/' + dept_id + '.json', {}).then(function (response) {
           // if(!response)
           //  response = {};
           return response.data;
        });
      };

       debugger
       this.geteditdept =  function (department) {
        debugger
           return UserAjax.request('PUT', '/departments/' + department.id + '.json', department).then(function (response) {
           // if(!response)
           //  response = {};
           return response.data;
        });
      };
 });    

})();



