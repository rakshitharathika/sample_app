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
  .module('teams')
  .service('TeamsService', function($http, UserAjax) {

           debugger
           this.getdept =  function () {
      debugger
           return UserAjax.request('GET', '/departments.json', {}).then(function (response) {
           // if(!response)
           //  response = {};
           return response.data;
        });
      };






          debugger
      this.teamsSample =  function (team) {
        debugger
           return UserAjax.request('POST', '/teams.json', team).then(function (response) {
           // if(!response)
           debugger
           //  response = {};
           return response.data;
        });
      };


       this.getteam =  function () {
           return UserAjax.request('GET', '/teams.json', {}).then(function (response) {
           // if(!response)
           //  response = {};
           return response.data;
        });
      };

  debugger
          
       this.teamShow =  function (team_id) {
        debugger
           return UserAjax.request('GET', '/teams/' + team_id + '.json', {}).then(function (response) {
           // if(!response)
           //  response = {};
           return response.data;
        });
      };

       debugger
       this.geteditteam =  function (team) {
        debugger
           return UserAjax.request('PUT', '/teams/' + team.id + '.json', team).then(function (response) {
           // if(!response)
           //  response = {};
           return response.data;
        });
      };
 });    

})();



