// angular.module('myApp', [], angular.noop)
// .controller('myCtrl', function ($scope, $compile) {
//     var link = $compile($('#a'));
//     var scope = $scope.$new(true);
//     scope.text = 'hello';
//     var node = link(scope, function (clone_element, scope) {
//         clone_element.addClass('new_class');
//     });
//     $('#b').append(node);
//     console.log(node);
// })

//transclude

angular.module('transcludeApp', [], angular.noop)
    // .directive('more', function () {
    //     var func = function (element, attrs, transclude) {
    //         var sum = transclude(1, 2);
    //         console.log(sum);
    //         console.log(element);
    //     }
    //
    //     return {
    //         compile: func,
    //         restrict: "E"
    //     };
    // })
    // .controller('transcludeCtrl', function ($scope, $element, $compile) {
    //     var s = '<more>123</more>';
    //     var link = $compile(s, function (a, b) { return a + b;});
    //     var node = link($scope);
    //     console.log('node', node);
    //     $element.append(node);
    // });
    .directive('more', function ($rootScope, $document) {
        var func = function (element, attrs, link) {
            var node = link($rootScope);
            node.removeAttr('more');
            $('body', $document).append(node);
        }

        return {
            compile: func,
            transclude: 'element',
            restrict: 'A'
        }
    })
    .controller('transcludeCtrl', function () {
        
    })

