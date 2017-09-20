(function() {
  'use strict';

  /**
   * @ngdoc function
   * @name app.service:profileService
   * @description
   * # profileService
   * Service of the app
   */

    angular
    .module('balaji')
    .service('SidebarService',function($http, UserAjax){
      this.getSidebar =  function () {
        return UserAjax.request('GET', '/links_for_sidebar', {}).then(function (response) {
          if(!response)
            response = {};
          return response.data;
        });
      };      
    });
    // Inject your dependencies as .$inject = ['$http', 'someSevide'];
    // function Name ($http, someSevide) {...}
})();
