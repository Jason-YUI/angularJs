// angular.module('ngView', [], function ($routeProvider) {
//     $routeProvider.when('/a',
//         {
//             template: '{{title}}',
//             controller: function ($scope) {
//                 $scope.title = 'a';
//             }
//         }
//     );
//     $routeProvider.when('/b',
//         {
//             template: '{{title}}',
//             controller: function ($scope, $route) {
//                 console.log($route);
//                 $route.routes['/a'].controller($scope);
//             }
//
//         }
//     );
// });
// angular.module('ngView', [],
//     function($routeProvider){
//         $routeProvider.when('/test',
//             {
//                 templateUrl: 'tpl.html',
//                 controller: function($scope){
//                     $scope.title = 'a';
//                 }
//             }
//         );
//     }
// );

// angular.module('ngView', [],
//     function($routeProvider){
//         $routeProvider.when('/test',
//             {
//                 template: '{{}}',
//                 controller: function(){
//                     $('div').first().html('<b>OK</b>');
//                 }
//             }
//         );
//     }
// );

angular.module('app', [])
    .controller('testCtrl', function ($scope, $http) {
        var p = $http({
            method: 'GET',
            url: 'data.json',
            params: {callback: 'JSON_CALLBACK'}
        });
        $http.defaults.transformRequest = function (data) {
            console.log('here');
            return data;
        };
        console.log('$http.pendingRequests', $http.pendingRequests);
        p.success(function (response, status, headers, config) {
            console.log(response)
            $scope.name = response.name;
            $scope.age = response.age;

        })
    })

    .controller('deferCtrl', function ($scope, $q) {
        var defer = $q.defer();
        var promise = defer.promise;
        promise.then(function (data) { console.log('ok', + data)},
                     function (data) { console.log('error', + data)});
        defer.resolve('xx');
    })

    .controller('qCtrl', function ($scope, $http, $q) {
        var p1 = $http.get('data.json', {params: {a: 1}});
        var p2 = $http.get('data.json', {params: {a: 2}});
        var all = $q.all([p1, p2]);
        p1.success(function (res) { console.log('here')});
        all.then(function (res) {
            console.log(res[0]);
        })
    })
    .controller('promiseCtrl', function ($scope, $q) {
        // var defer = $q.defer();
        // var p = defer.promise;
        // p.then(function (data) {
        //     return 'xxx';
        // });
        // p.then(function (data) {
        //     console.log(data)
        // });
        // defer.resolve('123');
        var defer = $q.defer();
        var p = defer.promise;
        var p2 = p.then(function (data) {
            return 'xxx';
        });
        p2.then(function (data) {
            console.log(data);
        });
        defer.resolve('123');
    })
    .controller('rejectCtrl', function ($scope, $q) {
        var defer = $q.defer();
        var p = defer.promise;
        p.then(
            function (data) { return data },
            function (data) { return $q.reject(data)}
        ).
          then(
            function (data) { console.log('ok' + data)},
            function (data) { console.log('error' + data)}
        )
        defer.reject('123');
    })
    .controller('whenCtrl', function ($scope, $q) {
        var p = $q.when(0, function (data) { return data },
                           function (data) { return data }
        )
        p.then(
            function (data) { console.log('ok' + data)},
            function (data) { console.log('error' + data)}
        )
    })
    .controller('bindCtrl', function ($scope) {
        // var f = angular.bind({a: 'x'}, function () {
        //     console.log(this.a)
        // });
        // f();
        //参数动态绑定
        // var f = function (x) {
        //     console.log(x)
        // }
        // angular.bind({}, f, 'x')();
        //
        // var a = {'x': '123'};
        // // console.log(a);
        // var b = angular.copy(a);
        // a.x = '456';
        // console.log(b);
        //
        //
        var a = {'x': '123'};
        var b = {'xx': '456'};
        angular.extend(b, a);
        console.log(b);
        console.log(angular.lowercase('A'));
        var json = {
            'name': 'jason',
            'age': 12
        };
        // console.log(angular.fromJson(json));
        var obj1 = {a: '1', b: '2'};
        var arr = ['a', 'b', 'c'];
        // console.log(l);
        angular.forEach(obj1, function (v, k) {
            console.log(k+ ':' + v);
        });
        angular.forEach(arr, function (v) {
            console.log(v);
        })
    })
    .controller('timeoutCtrl' ,function ($scope, $parse) {
        // var p = $timeout(function () { console.log('aaaa') }, 5000);
        // p.then(function () {
        //     console.log('x')
        // });
        var get_name = $parse('name');
        // $scope.show = function () {
        //     console.log($scope.get_name($scope));
        // }
        // $scope.set = function () {
        //     $scope.n ame = '123';
        // }
        var set_name = get_name.assign;
        var r = get_name({name: 'xx'}, {name: 'abc'});
        console.log(r);

        var s = {};
        set_name(s, '123');
        console.log(s);
    })
    .controller('compileCtrl', function ($scope, $element, $compile) {
        $scope.a = '123';
        $scope.set = function () {
            var tpl = $compile('<p>hello, {{a}}</p>');
            var e = tpl($scope);
            $element.append(e);
        }
        $scope.set();
    })
    // .controller('providerCtrl', function ($scope) {
    //     var pp = function () {
    //         this.$get = function () {
    //             return { 'haha' :'123'}
    //         }
    //     }
    // });

angular.module('MyModule', [], function($provide){
    $provide.factory('S1', function(){
        return 'I am S1';
    });
    $provide.factory('S2', function(){
        return {see: function(){return 'I am S2'}}
    });
});

var app = angular.module('Demo', ['MyModule'], angular.noop);
app.controller('TestCtrl', function($scope, S1, S2){
    console.log(S1)
    console.log(S2.see())
});