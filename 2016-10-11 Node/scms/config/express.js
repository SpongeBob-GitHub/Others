//express.js

var express = require('express');
var bodyParser = require('body-parser');

module.exports = function(){
  console.log('init express...');
  var app = express();

  app.use(bodyParser.json());
  app.use(express.static("./public"));
  
  require('../app/routes/news.server.routes')(app);

  app.use(function(req, res, next){
    res.status(404);
    try {
      return res.json('Not Found');
    } catch (e) {
      console.error('404 set header after sent');
    }
  });

  app.use(function(err, req, res, next){
    if (!err) {
      return next();
    }
    res.status(500);
    try {
      return res.json(err.message || 'server error');
    } catch (e) {
      console.error('500 set header after sent');
    }
  });

  return app;
};
