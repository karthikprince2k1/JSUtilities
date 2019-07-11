/*
Usage of EventBus
var subscriber1 = function(){
    console.log('Data Received', arguments);
}
EventBus.subscribe('searchCompleted', function(data){
    console.log(data);
})
EventBus.subscribe('searchCompleted', subscriber1);
EventBus.broadcast('searchCompleted', {data: [1,2,3]})
EventBus.unsubscribe('searchCompleted', subscriber1);
*/

var EventBus = (function(){
    var _eventBus = {};
    var subscribe = function(eventName, fn){
        _eventBus[eventName] = _eventBus[eventName] || [];
        _eventBus[eventName].push(fn);
    }
    var broadcast = function(eventName, data){
        var arr = _eventBus[eventName];
        if(arr && arr.length > 0){
            arr.forEach(function(fn) {
                window.setTimeout(function(){
                    fn(data);
                },0)
            }, this);
        }
    }
    var unsubscribe = function(eventName, fn){
        var arr = _eventBus[eventName];
        if(arr && arr.length > 0){
            _eventBus[eventName] = arr.filter(function(fn2){
                return fn !== fn2;
            })
        }
    }
    return {
        broadcast: broadcast,
        subscribe: subscribe,
        unsubscribe: unsubscribe
    }

})();