(function (angular) {
'use strict';
angular.module('view_pro', ['ngRoute'])
    .controller('homeCtrl', function ($scope, $routeParams) {
        $scope.params = $routeParams;})
    .config(['$routeProvider', '$locationProvider',
    function ($routeProvider, $locationProvider) {
            $routeProvider
                .when('/login', {
                    templateUrl: '/html/login.html'
                })
                .when('/home/:userId', {
                    templateUrl: '/html/home.html',
                    controller: 'homeCtrl'
                })
                .otherwise({
                    redirectTo: '/login'
                });
    }]);
})(window.angular);