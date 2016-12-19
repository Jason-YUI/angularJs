/**
 * Created by Administrator on 2016/9/6.
 */
var module=angular.module("MyNoudle",[]);
module.directive("hello",function(){
   return{
       restrict:"AE",
       transclude:true,
       template:"<div>hello everyone!<div ng-transclude></div></div>"
   }
});