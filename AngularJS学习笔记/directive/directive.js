// var stringObj = '终古人民共和国，终古人民';
// var reg = new RegExp('终古', 'g');
// stringObj.replace(reg, '中国');
var app = angular.module('Demo', [], angular.noop);
app.controller('myCtrl', function ($scope, $compile) {
    var link = $compile('<p>{{ text }}</p>');
    var node = link($scope);
    console.log(node);
})
app.directive('code', function(){
    var func = function($scope, $element, $attrs){

        var html = $element.text();
        var lines = html.split('\n');

        //处理首尾空白
        if(lines[0] == ''){lines = lines.slice(1, lines.length - 1)}
        if(lines[lines.length-1] == ''){lines = lines.slice(0, lines.length - 1)}

        $element.empty();

        //处理外框
        (function(){
            $element.css('clear', 'both');
            $element.css('display', 'block');
            $element.css('line-height', '20px');
            $element.css('height', '200px');
        })();

        //是否显示行号的选项
        if('lines' in $attrs){
            //处理行号
            (function(){
                var div = $('<div style="width: %spx; background-color: gray;' +
                    'float: left; text-align: right; padding-right: 5px;' +
                    'margin-right: 10px;"></div>'
                        .replace('%s', String(lines.length).length * 10));
                var s = '';
                angular.forEach(lines, function(_, i){
                    s += '<pre style="margin: 0;">%s</pre>\n'.replace('%s', i + 1);
                });
                div.html(s);
                $element.append(div);
            })();
        }

        //处理内容
        (function(){
            var div = $('<div style="float: left;"></div>');
            var s = '';
            angular.forEach(lines, function(l){
                s += '<span style="margin: 0;">%s</span><br />\n'
                    .replace('%s', l.replace(/\s/g, '<span>&nbsp;</span>'));
            });
            div.html(s);
            $element.append(div);
        })();
    }

    return {link: func,
        restrict: 'AE'}; //以元素或属性的形式使用命令
});

angular.bootstrap(document, ['Demo']);