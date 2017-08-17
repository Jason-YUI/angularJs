//创建模型
var app = angular.module('app', []);
//通过工厂模式自定义服务
app.factory('myFactory', function () {
    var service = {};
    service.name = 'jason';
    var age;
    service.setAge = function (newAge) {
        age = newAge;
    }
    service.getAge = function () {
        return age;
    }
    return service; //返回object
});

//创建控制器
app.controller('myCtrl', function ($scope, myFactory) {
    myFactory.setAge(20);
    $scope.r = myFactory.getAge();
    console.log(myFactory.name);
});

var app2 = angular.module('app2', []);
app2.factory('myFactory2', function ($scope, $q) {
    var service = {};
    service.name = 'shawn';
    $scope.getDate = function () {
        var d = $q.defer();
        $http.get('data.json')
            .success(function (response) {
                d.resolve(response);
            })
            .error(function () {
                d.reject('error');
            })
        return d.promise;
    }
    return service;
});

app2.controller('myCtrl2', function ($scope, myFactory2) {
    myFactory2.getData().then(function (data) {
        console.log(data); //success
    }, function (data) {
        console.log(data); //error
    });
});