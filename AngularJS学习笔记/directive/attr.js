// var app = angular.module('Demo', [], angular.noop);

// app.directive('a', function () {
//     var func = function (element, attrs, link) {
//         return function (scope) {
//             console.log('scope', scope);
//         }
//     }
//
//     return {
//         compile: func,
//         scope: {a: '@abc', xx: '@xx', c: '@'},
//         restrict: 'A'
//     }
// });

// app.directive('a', function () {
//     var func = function (element, attrs, link) {
//         return function (scope) {
//             console.log('1', scope);
//             scope.a();
//             scope.b();
//
//             scope.show = function (here) {
//                 console.log('Inner' + here);
//                 scope.a({here: 5});
//             }
//         }
//     }
//
//     return {
//         compile: func,
//         scope: {a: '&abc', b: '&ngClick'},
//         restrict: 'A'
//     };
// });
//
// app.controller('TestCtrl', function ($scope) {
//     // $scope.a = '123';
//     $scope.here = '123';
//     console.log('2', $scope);
//
//     $scope.show = function (here) {
//         console.log('3', here);
//     }
// });=
//
// app.directive('a', function(){
//     var func = function(){
//         console.log('compile');
//         return function(){
//             console.log('link');
//         }
//     }
//
//     var controller = function($scope, $element, $attrs, $transclude){
//         console.log('controller');
//         console.log($scope);
//
//         var node = $transclude(function(clone_element, scope){
//             console.log(clone_element);
//             console.log('--');
//             console.log(scope);
//         });
//         console.log(node);
//     }
//
//     return {compile: func,
//         controller: controller,
//         transclude: true,
//         restrict: 'E'}
// });
var app = angular.module('Demo', [], angular.noop);
app.directive('test', function () {
    var link = function ($scope, $element, $attrs, $ctrl) {
        $ctrl.$formatters.push(function (value) {
            return value.join(',');
        });
        $ctrl.$parent.push(function (value) {
          return value.split(',');
        })
    }

    return {
        compile: function () {
            return link
        },
        require: 'ngModel',
        restrict: 'A'
    }
});
app.controller('TestCtrl', function ($scope) {
    $scope.a = [];
    $scope.show = function (v) {
        console.log(v);
    }
});

