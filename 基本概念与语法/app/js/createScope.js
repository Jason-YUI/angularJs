/**
 * Created by Administrator on 2016/9/6.
 */
var mymodule=angular.module("MyModule",[]);
mymodule.directive("hello",function(){
    return{
        scope:{},
        restrict:"AE",
        template:"<div><input type='test' ng-model='username'>{{username}}</div>",
        replace:true
    }
});
