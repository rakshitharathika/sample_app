'use strict';

/**
 * @ngdoc function
 * @name app.route:createuserRoute
 * @description
 * # createuserRoute
 * Route of the app
 */

angular.module('createuser')
	.config(['$stateProvider', function ($stateProvider) {
		
		$stateProvider
			.state('createlist', {
				url:'/createlist',
				templateUrl: 'app/modules/createuser/createlist.html',
				controller: 'CreateuserCtrl',
				controllerAs: 'vm'
			})


		$stateProvider
			.state('createuser', {
				url:'/createuser',
				templateUrl: 'app/modules/createuser/createuser.html',
				controller: 'CreateuserCtrl',
				controllerAs: 'vm'
			})


		$stateProvider
			.state('createedit', {
				url:'/createedit/:id',
				templateUrl: 'app/modules/createuser/createedit.html',
				controller: 'CreateeditCtrl',
				controllerAs: 'vm'
			});
		

		$stateProvider
			.state('createshow', {
				url:'/createshow/:id',
				templateUrl: 'app/modules/createuser/createshow.html',
				controller: 'CreateshowCtrl',
				controllerAs: 'vm'
			});
		
	}]);



// 'use strict';

/**
 * @ngdoc function
 * @name app.route:exceptionRoute
 * @description
 * # exceptionRoute
 * Route of the app
 */

// angular.module('complianceAnalysis')
// 	.config(['$stateProvider', function ($stateProvider) {

// 		$stateProvider
// 			.state('home.analysis', {
// 				url:'/compliance/analysis',
// 				templateUrl: 'app/modules/compliance/analysis/analysis.html',
// 				controller: 'ComplianceAnalysisCtrl',
// 				controllerAs: 'vm'
// 			})
// 			.state('home.manageanalysis', {
// 				url:'/compliance/analysis/:standardclause/analysismanage',
// 				templateUrl: 'app/modules/compliance/analysis/analysismanage.html',
// 				controller: 'ComplianceAnalysisCtrl',
// 				controllerAs: 'vm'
// 			})
// 			.state('home.showanalysis', {
// 				url:'/compliance/analysis/:standardclause/show/:manageclause/addanalysis',
// 				templateUrl: 'app/modules/compliance/analysis/analysisadd.html',
// 				controller: 'ComplianceAnalysisCtrl',
// 				controllerAs: 'vm'
// 			});


// 	}]);
