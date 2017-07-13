// http_post.js

var http = require('http');
var querystring = require('querystring');
//json转换为字符串
var data = querystring.stringify({
    id:"1",
    pw:"hello"
});
var options = {
    // host: '115.29.45.194',
   host:'localhost',
   port: 14000,
//    path: '/v1?command=getAuthenticode',
    path:'/callme/index.cfm/userService/command/getAuthenticode/',
    method: 'POST',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': Buffer.byteLength(data)
    }
};

var req = http.request(options, function(res) {
    res.setEncoding('utf8');
    res.on('data', function (chunk) {
        console.log("body: " + chunk);
    });
    res.on('end',function(chunk){
        console.log("body: " + chunk);
    })
});
req.write(data);
req.end();