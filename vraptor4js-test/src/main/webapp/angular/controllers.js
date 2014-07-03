angular.module('app.controllers', ['app.services'])
	.controller('TestCtrl', function($scope, IndexController) {
		// This is your JS controller
		IndexController.index(function(resp){
			$scope.serverMessage = resp.string;
		});
	});

angular.module('app.services', []);
