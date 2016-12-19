/**
 * Created by Administrator on 2016/9/7.
 */
var mymodule=angular.module("MyModule",[]);
mymodule.controller("MyCtrl",["$scope",function($scope){
    $scope.ctrlFlavor="百威";
}]);
//控制器
mymodule.directive("drink",function(){
     return{
         restrict:"AE",
         scope:{
             flavor:'='
         },
         template:"<input type='test' ng-model='falvor'>"
     }
});
//指令