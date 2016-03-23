var app = angular.module('mainApp' , ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
	.when('/',{
		template : 'main'
	})
	.when('/catgory', {
		template: '<img  class="glow" ng-src="http://www.extremetech.com/wp-content/uploads/2013/09/4Vln8-640x428.jpg" width="600" height="450"/>'
	})
	.when('/expenses' , {
		template : '<img  class="glow" ng-src="http://science-all.com/images/animals/animals-04.jpg" width="600" height="450"/>'
	})
	.when('/personalProgram' ,{
		template : '<img  class="glow" ng-src="http://img.huffingtonpost.com/asset/scalefit_600_noupscale/5671925a1600002b00eb8f71.jpeg" width="600" height="450"/>'
	})
	.otherwise({redirectTo : '/'});
});

