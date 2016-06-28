
var myApp= angular.module('myApp',['angular.filter','ngRoute','ngAnimate']);
myApp.config(['$locationProvider', '$routeProvider',
    function($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/phones', {
          templateUrl: 'partials/phonelist.html',
          controller: 'ListController'
        }).
        when('/phones/:phoneId', {
          templateUrl: 'partials/phonedetail.html',
          controller:'DetailController'
        }).
        otherwise('/phones');
    }
  ]);
myApp.controller("ListController",['$scope','$http',function($scope,$http){
	$http.get('phones/phones.json').success (function(data){
				$scope.phones = data;
        $scope.phones.order='age';
			});

}]);
myApp.controller("DetailController",['$scope','$http','$routeParams',function($scope,$http,$routeParams){
	$scope.detail=$routeParams.phoneId;
	$http.get('phones/' + $routeParams.phoneId + '.json').success (function(data){
				$scope.phonedetail = data;
				console.log($routeParams.phoneId);
			});

}]);

