// (function() {
// 	'use strict';

// 	/**
// 	 * @ngdoc function
// 	 * @name app.service:createuserService
// 	 * @description
// 	 * # createuserService
// 	 * Service of the app
// 	 */

//   	angular
// 		.module('createuser')
// 		.factory('CreateuserService', Createuser);
// 		// Inject your dependencies as .$inject = ['$http', 'someSevide'];
// 		// function Name ($http, someSevide) {...}

// 		Createuser.$inject = ['$http'];

// 		function Createuser ($http) {

// 		}

// })();


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
  .module('createuser')
  .service('CreateuserService', function($http, UserAjax) {
      this.Sample =  function (user) {
        debugger
           return UserAjax.request('POST', '/users.json', user).then(function (response) {
           // if(!response)
           debugger
           //  response = {};
           return response.data;
        });
      };


       this.getSample =  function () {
           return UserAjax.request('GET', '/users.json', {}).then(function (response) {
           // if(!response)
           //  response = {};
           return response.data;
        });
      };


          
       this.getShow =  function (user_id) {
        
           return UserAjax.request('GET', '/users/' + user_id + '.json', {}).then(function (response) {
           // if(!response)
           //  response = {};
           return response.data;
        });
      };

       debugger
       this.getedit =  function (user) {
        debugger
           return UserAjax.request('PUT', '/users/' + user.id + '.json', user).then(function (response) {
           if(!response)
            response = {};
           return response.data;
        });
      };
 });    

})();



