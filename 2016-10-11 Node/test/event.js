// event.js


console.log('1s后输出‘some_event occured.’');

var EventEmitter = require('events');
var event = new EventEmitter();

event.on('some_event', function() {
	console.log('some_event occured.');

	console.log('运行这段代码,1秒后控制台输出了 some_event occured.。其原理是 event 对象 注册了事件 some_event 的一个监听器,然后我们通过 setTimeout 在1000毫秒以后向 event 对象发送事件some_event,此时会调用 some_event的监听器');
});

setTimeout(function() {
	event.emit('some_event');
}, 1000);