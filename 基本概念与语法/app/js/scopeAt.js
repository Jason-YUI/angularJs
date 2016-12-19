/**
 * Created by Administrator on 2016/9/6.
 */
var mymodule=angular.module("MyModule",[]);
mymodule.controller('MyCtrl',['$scope',function($scope){
    $scope.ctrlFlavor="百威";
}])
mymodule.directive("drink",function(){
    return{
        restrict:'AE',
       /* scope:{
            flavor:'@'
        },*/
        scope:{
            flavor:'='
        },
        template:"<div>{{flavor}}</div>"
      /*  link:function(scope,element,attr){
            scope.flavor=attr.flavor;
        }*/
    }
});