/**
 * Created by Administrator on 2016/8/31.
 */
function GreetCtrl($scope,$rootScope){
    $scope.name='world';
    $rootScope.department='Angular';
}
function ListCtrl($scope){
    $scope.names=['Igor','Bower','Mamer'];
}