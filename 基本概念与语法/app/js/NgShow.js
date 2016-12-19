/**
 * Created by Administrator on 2016/9/2.
 */
var mycssmodule=angular.module('myCssModule',[]);
mycssmodule.controller('ngToggleModule',['$scope',function($scope){
    $scope.menuState={
        show:false
    }
    $scope.toggleMenu=function(){
        $scope.menuState.show=!$scope.menuState.show;
    }
}]);
