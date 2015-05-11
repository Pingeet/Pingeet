(function(angular) {
'use strict';
angular.module('view_pro', ['ngRoute'])
    .config(['$routeProvider', '$locationProvider',
        function ($routeProvider, $locationProvider) {
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
}]);
})(window.angular);