'use strict';

/**
 * @ngdoc function
 * @name app.route:profileRoute
 * @description
 * # profileRoute
 * Route of the app
 */

angular.module('balaji')
  .config(['$stateProvider', function ($stateProvider) {
    
    $stateProvider
      .state('home.sidebar', {
        url:'/sidebar',
        templateUrl: 'app/modules/shared/directives/sidebar/sidebar.html',
        controller: 'ProfileCtrl',
        controllerAs: 'vm'
      });

    
  }]);
