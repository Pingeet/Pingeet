'use strict';
var userService = angular.module('userService', [
'addUser',
'getUser'
]);

var addUser = angular.module('addUser', []);
addUser.controller('addUser_Ctrl', ['$scope', '$http',
    function ($scope, $http) {
        $scope.addNewUser = function () {
            var username = $scope.username.trim(); // .trim() allow to remote the useless spaces at the beginning and the end of the characters string
            var password = $scope.password;
            if (!username.length || !password.length) // avoid empty
            {
                return;
            }
            var newUser = $scope.newUser = {
                login: username,
                password: password
            };
            $http.post('/user/create', $scope.newUser).success(function (data) {
                if (data == 'err') {
                    alert("Error");
                } else {
                    alert("Success");
                }
                $scope.perso = {};
            })
            $scope.username = '';
            $scope.password = '';
        };
    }
]);

var getUser = angular.module('getUser', []);
getUser.controller('getUser_Ctrl', ['$scope', '$http',
    function ($scope, $http) {
        $scope.findUser = function () {
            $scope.logpass = {
                login: $scope.username.trim(),
                secretPW: $scope.password
            }
            $http.post('/user/find', $scope.logpass)
                .success(function (data) {
                    if (data != 'err') {
                        $scope.user = data;
                    }
                    $scope.username = '';
                    $scope.password = '';
                })
        }
    }
]);