(function () {
    var app = angular.module('myApp', ['ngRoute']);
    app.config(function (myProviderProvider) {
        myProviderProvider.setName('jason');
    });
    app.provider('myProvider', function () {
        var name = {};
        var test = {'a':     1, 'b': 2};
        this.setName = function (newName) {
            name = newName;
        }
        this.$get = function ($http, $q) {
            return {
                getDate: function () {
                    var d = $q.defer();
                    $http.get('data.json')
                        .success(function (response) {
                            d.resolve(response)
                        })
                        .error(function (data) {
                            d.reject(data);
                        });
                    return d.promise;
                },
                'lastName': name,
                'test': test
            }
        }
    });
    app.controller('myCtrl', function ($scope, myProvider) {
        console.log(myProvider.lastName);
        console.log(myProvider.test.a);
        myProvider.getDate().then(function (data) {
            console.log(data);
        }, function (data) {
            console.log(data);
        })
    })
})();