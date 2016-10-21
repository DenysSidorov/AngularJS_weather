var app = angular.module('myapp', [])
    .controller('MyModuleWeather', function ($scope, $http) {

        $scope.townArray = [];
        $scope.city = 'Odessa';
        $scope.currentView = "table";

        // create address query
        $scope.getAddressQuery = function () {
            return $scope.queryAddress = 'http://api.openweathermap.org/data/2.5/weather?q=' + $scope.city + '&appid=b391ef1555ca9b9ca08fd62ef0e35566';
        }

        //  query to openweathermap
        $scope.queryWeather = function () {
            $http.get($scope.getAddressQuery())
                .success(function (response) {
                    $scope.addCity(response);
                }).error(function (res) {
                throw new Error("Send Error");
            })
        }

        //add city our array
        $scope.addCity = function (city) {
            if (city) {
                $scope.townArray.push(city);
            }
        }

        // delete city from array
        $scope.delete = function (item) {
            $scope.townArray.splice($scope.townArray.indexOf(item), 1);
        }

        $scope.queryWeather();
    });
