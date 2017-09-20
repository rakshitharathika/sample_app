(function() {
  'use strict';

  /**
   * @ngdoc function
   * @name app.controller:sidebarCtrl
   * @description
   * # sidebarCtrl
   * Controller of the app
   */

  angular
    .module('balaji')
    .controller('SidebarCtrl', Sidebar );

  Sidebar.$inject = ['SidebarService', '$scope', '$rootScope'];

  /*
   * recommend
   * Using function declarations
   * and bindable members up top.
   */

  function Sidebar(SidebarService, $scope, $rootScope) {

    var vm = this;
    /*jshint validthis: true */
    SidebarService.getSidebar().then(function(response){
      $scope.sidebarResponse = response;
      $scope.checkIfAllowed = function(data, grcModuleName) {
        return data.modules.indexOf(grcModuleName) !== -1
      }
    });


  }


})();
