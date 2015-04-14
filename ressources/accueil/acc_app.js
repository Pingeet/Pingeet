// js/geetList.js
'use strict';
/**
 *  statement of demoApp
 */
var Acc_App = angular.module('Acc_App', [
    'geetList',
    'clockApp'
]);

var geetList = angular.module('geetList', []);
geetList.controller('geet_Ctrl', ['$scope',
    function ($scope)
    {
        var geetS = $scope.geetS = [];
        $scope.addGeet = function ()
        {   
            var user="babouin";
            var newGeet = $scope.newGeet.trim();// .trim() allow to remote the useless spaces at the beginning and the end of the characters string   
            if (!newGeet.length)                // avoid empty geetS
            {return;}
            geetS.unshift(
            {// add the geet at the start of geetS 
                title: newGeet,
                user: user
            });
            $scope.newGeet = '';                // re-set newGeet
        };
    }
]);