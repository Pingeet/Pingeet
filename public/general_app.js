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

/*var headband_Show = angular.module('headband_Show', []);
headband_Show.controller('hbs_Controller', ['$scope', '$location',
    function ($scope,$location)
    {

        var url = $location.url();

        $scope.hb_show = url;
    }]);

var reloadtool=angular.module('reloadtool',[]);
reloadtool.controller('reloadtool_Controller',['$route',
      function($route)
       {
       $route.reload();
       }]);*/