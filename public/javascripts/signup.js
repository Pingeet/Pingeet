'use strict';
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
            $http.post('/create', $scope.newUser).success(function (data) {
                if (data == 'err') {
                    alert("Désolé un problème est survenu lors de l 'enregistrement");
                } else {
                    alert("La fiche a bien été enregistrée");
                }
                $scope.perso = {};
            }) 
            $scope.username = '';
            $scope.password = '';
        };
                }]);