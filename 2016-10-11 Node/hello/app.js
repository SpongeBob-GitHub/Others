var http = require('http');

http.createServer(function(req, res) {
	res.end('hello, node.js');
}).listen(8011);

// nodemon --debug app.js
// node-inspector
// http://127.0.0.1:8080/debug?ws=127.0.0.1:8080&port=5858


// web socket <-> node.js <-> push message

// https://fatesinger.com/77763
// http://www.jianshu.com/p/04e1b65dd2c0