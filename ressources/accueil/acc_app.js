'use strict';
var Acc_App = angular.module('Acc_App', [
    'geetList',
    'clockApp',
    //'geetData'
]);

var geetList = angular.module('geetList', []);
geetList.controller('geet_Ctrl', ['$scope',
    function ($scope)
    {
        var geetS = $scope.geetS = [];
        $scope.addGeet = function ()
        {   
            var time=gettime();
            var user="babouin";
            var newGeet = $scope.newGeet.trim();// .trim() allow to remote the useless spaces at the beginning and the end of the characters string   
            if (!newGeet.length)                // avoid empty geetS
            {return;}
            geetS.unshift(
            {// add the geet at the start of geetS 
                msg: newGeet,
                user: user,
                date: {
                        day:time.day,
                        month:time.month,
                        year:time.year,
                        hours:time.hours,
                        minutes:time.minutes,
                        seconds:time.seconds
                      }
            });
            $scope.newGeet = '';                // re-set newGeet
        };
        $scope.removeGeet = function (geet) { // remove a geet
            geetS.splice(geetS.indexOf(geet), 1);
        };
    }
]);