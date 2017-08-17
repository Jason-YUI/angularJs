(function () {
    var app = angular.module('app', ['ngRoute', 'ngResource']);
    app.service('myService', function ($scope, $q) {
        this.name = 'service';
        this.myFunc = function (x) {
            return x.toString(16);
        }
        this.getDate = function () {
            var d = $q.defer();
            $http.get('data.json')
                .success(function (reponse) {
                    d.resolve(reponse);
                })
                .error(function () {
                    alert(0)
                    d.reject('error');
                });
            return d.promise;
        }
    });

    app.controller('myCtrl', function ($scope, myService) {
        $scope.r = myService.myFunc(255);
        myService.getData().then(function (data) {
            console.log(data);
        }, function (data) {
            alert(data);
        });
    });
})();