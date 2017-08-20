// angular.module('App', [])
// .directive('showLength', function ($rootElement, $document) {
//     var func = function (element, attrs, link) {
//         return function (scope, ielement, iattrs, controller) {
//             var node = link(scope);
//             ielement.append(node);
//             var lnode = $('<span></span>');
//             ielement.prepend(lnode)
//
//             console.log(lnode)
//
//             scope.$watch(function (scope) {
//                 lnode.text(node.text().length);
//             })
//         }
//     }
//
//     return {
//         compile: func,
//         transclude: true,
//         restrict: 'A'
//     };
// })
// .controller('showLengthCtrl', function ($scope) {
//
// })

angular.module('App', [], angular.noop)
.directive('acc', function () {
    var func = function (element, attrs, link) {
        console.log(acc);
    }

    return {
        compile: func,
        priority: 1,
        restrict: 'AE'
    };
})
.directive('bcc', function () {
    var func = function (element, attrs, link) {
        console.log(bcc)
    }

    return {
        compile: func,
        priority: 2,
        restrict: 'A'
    };
})

    
.controller('showLengthCtrl', function ($scope) {

})

