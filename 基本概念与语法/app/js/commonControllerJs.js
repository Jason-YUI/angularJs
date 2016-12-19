/**
 * Created by Administrator on 2016/8/31.
 */
function commonController($scope){
    $scope.conmmonFn=function(){
        alert("这里是通用功能");
    }
}
function controller1($scope){
    $scope.greeting={
        text:"Hello1"
    }
    $scope.test1=function(){
        alert("test1");
    }
}
function controller2($scope){
    $scope.greeting={
        text:"hello2"
    }
    $scope.test2=function(){
        alert("test2");
    }
}