var NewsController = require('../controllers/news.server.controller');

module.exports = function(app){
  app.route('/news')
     .get(NewsController.list)
     .post(NewsController.create);
     
  app.route('/news/:nid')
     .get(NewsController.get);

  app.param('nid', NewsController.getById);
};
