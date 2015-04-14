var clockApp = angular.module('clockApp', []);
    clockApp.controller('dateCtrl', ['$scope',
        function($scope)
        {
        // Return date and current time
            var currentdate = new Date(); 
            $scope.time=
            {
            day: currentdate.getDate(),
            month: currentdate.getMonth(),
            year: currentdate.getFullYear(),
            hours: currentdate.getHours(),
            minutes: currentdate.getMinutes(),
            seconds: currentdate.getSeconds()
            };
        }]);
