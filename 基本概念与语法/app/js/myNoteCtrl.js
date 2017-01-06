/**
 * Created by Administrator on 2017/1/6.
 */
app.controller("myNoteCtrl",function($scope){
    $scope.message="";
    $scope.left=function(){
        return 100-$scope.message.length;
    }
    $scope.clear=function(){
        return $scope.message="";
    }
    $scope.save=function(){
        alert("Note save");
    }
});