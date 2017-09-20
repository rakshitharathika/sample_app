'use strict';

// Karma configuration
module.exports = function (config) {
	config.set({
		// Frameworks to use
		frameworks: ['jasmine'],

		// List of files / patterns to load in the browser
		files: [
			'src/bower_components/jquery/dist/jquery.js',
			'src/bower_components/es5-shim/es5-shim.js',
			'src/bower_components/json3/lib/json3.min.js',
			'src/bower_components/bootstrap/dist/js/bootstrap.js',
			'src/bower_components/angular/angular.js',
			'src/bower_components/angular-aria/angular-aria.js',
			'src/bower_components/angular-resource/angular-resource.js',
			'src/bower_components/angular-mocks/angular-mocks.js',
			'src/bower_components/angular-cookies/angular-cookies.js',
			'src/bower_components/angular-sanitize/angular-sanitize.js',
			'src/bower_components/angular-animate/angular-animate.js',
			'src/bower_components/angular-touch/angular-touch.js',
			'src/bower_components/angular-bootstrap/ui-bootstrap-tpls.js',
			'src/bower_components/angular-ui-router/release/angular-ui-router.js',
			'src/bower_components/angular-aria/angular-aria.js',
			'app/app.js',
			'app/modules/home/homeModule.js',
			'app/modules/home/homeCtrl.js',
			'app/modules/home/homeRoute.js',
			'app/modules/home/homeService.js',
			'app/modules/home/home-test.js',
			'app/modules/createuser/createuserModule.js',
			'app/modules/createuser/createuserCtrl.js',
			'app/modules/createuser/createuserRoute.js',
			'app/modules/createuser/createuserService.js',
			'app/modules/createuser/createuser-test.js',
			'app/modules/categories/categoriesModule.js',
			'app/modules/categories/categoriesCtrl.js',
			'app/modules/categories/categoriesRoute.js',
			'app/modules/categories/categoriesService.js',
			'app/modules/categories/categories-test.js',
			'app/modules/tags/tagsModule.js',
			'app/modules/tags/tagsCtrl.js',
			'app/modules/tags/tagsRoute.js',
			'app/modules/tags/tagsService.js',
			'app/modules/tags/tags-test.js',
			'app/modules/locations/locationsModule.js',
			'app/modules/locations/locationsCtrl.js',
			'app/modules/locations/locationsRoute.js',
			'app/modules/locations/locationsService.js',
			'app/modules/locations/locations-test.js',
			'app/modules/departments/departmentsModule.js',
			'app/modules/departments/departmentsCtrl.js',
			'app/modules/departments/departmentsRoute.js',
			'app/modules/departments/departmentsService.js',
			'app/modules/departments/departments-test.js',
			'app/modules/teams/teamsModule.js',
			'app/modules/teams/teamsCtrl.js',
			'app/modules/teams/teamsRoute.js',
			'app/modules/teams/teamsService.js',
			'app/modules/teams/teams-test.js',
			'app/modules/blogs/blogsModule.js',
			'app/modules/blogs/blogsCtrl.js',
			'app/modules/blogs/blogsRoute.js',
			'app/modules/blogs/blogsService.js',
			'app/modules/blogs/blogs-test.js',
			'app/modules/shared/sidebar/sidebarRoute.js'
			'app/modules/shared/sidebar/sidebarCtrl.js'
			'app/modules/shared/sidebar/sidebarService.js'
			'app/modules/shared/sidebar/sidebar-test.js'
		],

		// Test results reporter to use
		// Possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
		//reporters: ['progress'],
		reporters: ['spec'],

		plugins : [
			'karma-jasmine',
			'karma-coverage',
			'karma-chrome-launcher',
			'karma-firefox-launcher',
			'karma-phantomjs-launcher',
			'karma-spec-reporter'
		],

		// Web server port
		port: 9876,

		// Enable / disable colors in the output (reporters and logs)
		colors: true,

		// Level of logging
		// Possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
		logLevel: config.LOG_INFO,

		// Enable / disable watching file and executing tests whenever any file changes
		autoWatch: true,

		// Start these browsers, currently available:
		// - Chrome
		// - ChromeCanary
		// - Firefox
		// - Opera
		// - Safari (only Mac)
		// - PhantomJS
		// - IE (only Windows)
		browsers: ['PhantomJS'],

		// If browser does not capture in given timeout [ms], kill it
		captureTimeout: 60000,

		// Continuous Integration mode
		// If true, it capture browsers, run tests and exit
		singleRun: true
	});
};
