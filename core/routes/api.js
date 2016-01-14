var express = require('express'),
    api = require('../api'),
    session = require('express-session'),

    apiRoutes;

apiRoutes = function apiRoutes() {
  var router = express.Router();

  function getUserInfo(req,res,next){
    req.user = {
      id: req.session.userinfo.username
    }
    next();
  }

  router.get('/books', api.http(api.books.getAllBooks));
  router.get('/books/:_id/', api.http(api.books.getBookInfo));
  router.get('/books/:_id/content', api.http(api.books.getBookContent));

  router.post('/books/:_id/progress',getUserInfo, api.http(api.books.updateReadingProgress));
  router.get('/books/:_id/progress',getUserInfo, api.http(api.books.getReadingProgress));


  return router;
};

module.exports = apiRoutes;
