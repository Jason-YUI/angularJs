/**
 * Created by Administrator on 2016/9/6.
 */
var mymodule=angular.module('mymodule',[]);
mymodule.controller('myCtrl',['$scope',function($scope){
    $scope.loadDate1=function(){
        console.log("数据加载中.....");
    }
}]);
mymodule.controller('myCtrl2',['$scope',function($scope){
    $scope.loadDate2=function(){
        console.log("数据加载中22222.....");
    }
}]);
mymodule.directive("loader",function(){
    return{
        restrict:"AE",
        link:function(scope,element,attr){
            element.bind("mouseenter",function(event){
                //scope.loadDate();
                //scope.$apply("loadDate()");//调用apply函数
                scope.$apply(attr.howtoload);
            });
        }
    }
});