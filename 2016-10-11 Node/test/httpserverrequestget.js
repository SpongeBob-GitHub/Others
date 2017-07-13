//httpserverrequestget.js
var http = require('http'); var url = require('url'); var util = require('util');
http.createServer(function(req, res) { 
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.end(util.inspect(url.parse(req.url, true)));
}).listen(3000);

//http://127.0.0.1:3000/user?name=byvoid&email=byvoid@byvoid.com