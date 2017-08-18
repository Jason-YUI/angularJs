require(['dojo/parser', 'dijit/Editor'], function(parser){
    parser.parse($('#editor_wrapper')[0]).then(function(){
        var app = angular.module('Demo', [], angular.noop);

        app.controller('TestCtrl', function($scope, $timeout){
            $scope.a = '我是ng, 也是dojo';
            $scope.show_edit_text = true;

            $scope.change = function(){
                $scope.a = 'DOM结构已经改变(不建议这样做)';
                require(['dojo/parser', 'dijit/form/Button', 'dojo/domReady!'],
                    function(parser){
                        parser.parse($('#btn_wrapper')[0]);
                        $scope.btn_disable = true;
                    }
                );
            }

            $scope.dialog = function(text){
                require(["dijit/Dialog", "dojo/domReady!"], function(Dialog){
                    var dialog = new Dialog({
                        title: "对话框哦",
                        content: text,
                        style: "width: 300px"
                    });
                    dialog.show();
                });
            }

            require(['dijit/registry'], function(registry){
                var editor = registry.byId('editor');
                $scope.$watch('text', function(new_v){
                    editor.setValue(new_v);
                });
            });

        });

        angular.bootstrap(document, ['Demo']);
    });

});
