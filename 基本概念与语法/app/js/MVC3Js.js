/**
 * Created by Administrator on 2016/9/1.
 */
var helloModule=angular.module('HelloAngular',[]);
helloModule.controller('helloNgCtrl',['$scope',function($scope){
    $scope.greeting={
        text:'hello'
    };
}]);