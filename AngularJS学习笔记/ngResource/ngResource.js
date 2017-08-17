(function () {
   var app = angular.module('demo', ['ngResource'], angular.noop);
   app.controller('BookCtrl', function ($scope, $resource) {
        // console.log($resource);
     var actions = {
         create: {method: 'POST', params: {_method: 'create'}},
         read: {method: 'POST', params: {_method: 'read'}},
         update: {method: 'POST', params: {_method: 'update'}},
         delete: {method: 'POST', params: {_method: 'delete'}},
         multi: {method: 'POST', params: {_method: 'multi'}}
     }
     // var Book = $resource('/book',{}, actions);
     // var book = Book.read({id: '123'},
     //     function (response) {
     //     console.log(response);
     // },  function (error) {
     //     console.log(error);
     // })
     var Book = $resource('/book',{}, actions);
        var book = Book.read({id: '123'},
            function (response) {
                console.log('1', book);
            });
        console.log('2', book);
        var book2 = Book.create({title: 'A', author: 'jason'},
            function (response) {
            angular.extend(book2, {title: 'A', author: 'jason'});
                console.log('4', book2);
        });
        console.log('3', book2);
   })
})();