'use strict';
var currentdate = new Date();
var gettime = function () {
    var time = {
        day: currentdate.getDate(),
        month: currentdate.getMonth(),
        year: currentdate.getFullYear(),
        hours: currentdate.getHours(),
        minutes: currentdate.getMinutes(),
        seconds: currentdate.getSeconds()
    };
    return time;
};
var clockApp = angular.module('clockApp', []);
clockApp.controller('dateCtrl', ['$scope',
    function ($scope)
    {
        // Return date and current time
        $scope.angtime = gettime();
    }]);