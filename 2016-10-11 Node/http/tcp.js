// tcp.js

// https://nodejs.org/api/net.html

var net = require('net');

const PORT = 18001;
const HOST = '127.0.0.1';

var clientHandler = function(socket){
	console.log('someone connected...');

	socket.on('data', function dataHandler(data){
		console.log(socket.remoteAddress, socket.remotePort, 'send', data.toString());
		socket.write('server received\n');
	});

	socket.on('close', function(){
		console.log(socket.remoteAddress, socket.remotePort, 'disconnected...');
	})
};

var app = net.createServer(clientHandler);

app.listen(PORT, HOST);

console.log('tcp server running on tcp://', HOST, ':', PORT);


// use [server] '$ node tcp.js'

// use [client] '$ telnet localhost 18001' 

// use [listen] '$ netstat -an | grep 18001'  