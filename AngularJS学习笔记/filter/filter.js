var app = angular.module('app', [], angular.noop);
app.filter('map', function () {
    var filter = function (input, map_value, append, default_value) {
        var r = map_value(input);
        if (r === undefined) {
            return default_value + append
        }else {
            return r + append;
        }
    };
    return filter;
});
app.controller('myCtrl', function ($scope) {
    $scope.map_value = {
        a: '一',
        a: '二',
        a: '三',
        a: '四'
    }
    $scope.a = 'a';
});