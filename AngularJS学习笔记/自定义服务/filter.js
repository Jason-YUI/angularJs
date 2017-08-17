var app = angular.module('app', []);
app.service('hexty', function () {
    this.myFunc = function (x) {
        return x.toString(16);
    }
});

app.filter('myFormat', ['hexty', function (hexty) {
    return function (x) {
        return hexty.myFunc(x);
    }
}]);

app.controller('myCtrl', function ($scope) {

})