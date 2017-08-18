var app = angular.module('Demo', [], angular.noop);
app.controller('testCtrl', function ($scope, $timeout) {
    $scope.a = '点我开始';

    var defer = $.Deferred();
    var f = function () {
        if ($scope.a == '') { $scope.a = '已停止'; return;}
        defer.done(function () {
            $scope.a.length < 10 ? $scope.a += '>' : $scope.a = '>';
            $timeout(f, 100)
        })
    }

    defer.done(function () {
        $scope.a = '>';
        f()
    });

    $scope.go = function () {
        defer.resolve();
        $timeout(function () {
            $scope.a = ''
        }, 5000)
    }
})

