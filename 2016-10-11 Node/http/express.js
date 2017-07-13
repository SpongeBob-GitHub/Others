// express.js

var express = require('express');

var morgan = require('morgan');

var app = express();

app.use(express.static('./express.js'));

app.use(morgan());

// easy
app.get('/', function(req, res){
	res.end('hello\n');
})

// 同个路由下边多个子路由
var Router = express();
Router.get('/add', function(req, res){
	res.end('Router /add\n');
})

Router.get('/list', function(req, res){
	res.end('Router /list\n');
})

app.use('/post', Router);

// RESTFul API
app.route('/article')
	.get(function(req, res){
		res.end('route /article get\n');
	})
	.post(function(req, res){
		res.end('route /article post\n');
	})

// http://example.com/news/123
app.param('newsId', function(req, res, next, newsId){
	
	// 从缓冲or数据库中读取数据
	req.newsId = newsId; 
	next();
});

app.get('/news/:newsId', function(req, res){
	res.end('newsId: ' + req.newsId + '\n');
});

app.listen(18001, function afterListen(){
	console.log('express running on http://localhost:18001');
});