//app.js

// $ node bin/www
// $ curl http://localhost:7101/news
// $ curl -X POST -H 'Content-Type: application/json' -d '{"title": "test title 1", "content": "test content 1"}' localhost:7101/news

var express = require('./config/express');
var mongodb = require('./config/mongoose');

var db = mongodb();
var app = express();

module.exports = app;
