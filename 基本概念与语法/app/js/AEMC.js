/**
 * Created by Administrator on 2016/9/6.
 */
var mymodule=angular.module("MyModule",[]);
mymodule.directive("hello",function(){
    return{
        restrict:'E',
        //template:'<div>Hi everyone</div>',
        templateUrl:'form.html',//切分独立的url
        replace:true
    }
})