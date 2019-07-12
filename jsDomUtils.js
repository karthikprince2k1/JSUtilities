/*
JS-DOM Utilities for Parsing Document
*/


window.jsDomUtils = (function(doc){
    var getElementsByClassName = function(className){
        var root = doc;
        var queue = [];
        queue.push(root);
        var result = [];
        while(queue.length > 0){
            var obj = queue.shift();
            if(obj.className && obj.className.indexOf(className) > -1) result.push(obj);
            for(var i=0; i<obj.children.length; i++){
                queue.push(obj.children[i])
            }
        }
        return result;

    }

    return {
        getElementsByClassName: getElementsByClassName
    }
})(document);