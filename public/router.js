'use strict';

// declare modules
angular.module('Authentication', []); //changement a faire ici

angular.module('BasicHttpAuthExample', [ //changement a faire ici
    'Authentication',
    'ngRoute',
    'ngCookies',
    //'headband_Show',
    //'reloadtool',
    'Acc_App'
])


.config(['$routeProvider', function ($routeProvider) {

    $routeProvider
        .when('/login', {
            controller: 'LoginController',
            templateUrl: '/login/login.html',
        })

//    .when('/public-page', {
//        templateUrl: 'modules/register/register.html'
//    })

    .when('/', {
        templateUrl: '/accueil/accueil.html',
        secure: true
    })

    .otherwise({
        redirectTo: '/login'
    });
}])

.run(['$rootScope', '$location', '$cookieStore', '$http', '$route',
    function ($rootScope, $location, $cookieStore, $http, $route) {
        // keep user logged in after page refresh
        $rootScope.globals = $cookieStore.get('globals') || {};
        if ($rootScope.globals.currentUser) {
            $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata; // jshint ignore:line
        }

        $rootScope.$on('$locationChangeStart', function (event, next, current) {
            // redirect to login page if trying to access 
            // a secure page and not logged in
            var nextRoute = $route.routes[$location.path()];
            if (nextRoute.secure && !$rootScope.globals.currentUser) {
                $location.path('/login');
            }
        });
    }]);