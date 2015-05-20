'use strict';
var geetList = angular.module('geetList', []);
geetList.controller('geet_Ctrl', ['$scope','$http',
    function ($scope,$http)
    {
        var geetS = $scope.geetS = [];
        $scope.addGeet = function (iduser) {
            var time = gettime();
            $scope.id = {
                id: iduser
            }
            $http.post('/user/name', $scope.id)
                .success(function (data) {
                    if (data != "") {
                        $scope.name=data[0].login;
                    }
                })
            var newGeet = $scope.newGeet.trim(); // .trim() allow to remote the useless spaces at the beginning and the end of the characters string   
            if (!newGeet.length) // avoid empty geetS
            {
                return;
            }
            geetS.unshift({ // add the geet at the start of geetS 
                msg: newGeet,
                user: $scope.name,
                date: {
                    day: time.day,
                    month: time.month,
                    year: time.year,
                    hours: time.hours,
                    minutes: time.minutes,
                    seconds: time.seconds
                }
            });
            $scope.newGeet = ''; // re-set newGeet
        };
        $scope.removeGeet = function (geet) { // remove a geet
            geetS.splice(geetS.indexOf(geet), 1);
        };
    }
]);
var getUserName = angular.module('getUserName', []);
getUserName.controller('getUserName_Ctrl', ['$scope', '$http',
    function ($scope, $http) {
        $scope.findUser = function (iduser) {
            $scope.id = {
                id: iduser
            }
            $http.post('/user/name', $scope.id)
                .success(function (data) {
                    if (data != "") {
                        $scope.name=data[0].login;
                    }
                })
        }
    }
]);