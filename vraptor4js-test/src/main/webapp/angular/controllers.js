angular.module('app.controllers', ['app.services'])
	.controller('TestCtrl', function($scope, IndexController) {
		// This is your JS controller
		IndexController.index(function(resp) { // success callback
			$scope.serverMessage = resp.string;
		},
		function(error, status) { // error callback
			console.log(error);			
		});
	});

angular.module('app.services', []);
