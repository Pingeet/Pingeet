'use strict';

var view_pro = angular.module('view_pro', []);
view_pro.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {

        $routeProvider
            .when('/login', {
                templateUrl: '/html/login.html',
                controller: 'viewCtrl'
            })

        .when('/', {
            templateUrl: '/html/home.html',
            controller: 'viewCtrl'
        })

        .otherwise({
            redirectTo: '/login'
        });
        $locationProvider.html5Mode(true);
}])
    .controller('MainCtrl', ['$route', '$routeParams', '$location',
  function ($route, $routeParams, $location) {
            this.$route = $route;
            this.$location = $location;
            this.$routeParams = $routeParams;
}])
    .controller('viewCtrl', ['$routeParams', function ($routeParams) {
        this.name = "viewCtrl";
        this.params = $routeParams;
}]);