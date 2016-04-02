var express = require('express'),
    api = require('../api'),
    session = require('express-session');

var apiRoutes = function apiRoutes() {
  var router = express.Router();

  function getUserInfo(req,res,next){
    console.log('> routes/api.js');
    console.log(req.session);

    if(req.session.userinfo) {
      req.user = {
        id: req.session.userinfo.username
      }
    }

    next();
  }

  router.get('/books', api.http(api.books.getAllBooks));
  router.post('/books',getUserInfo, api.http(api.books.addBook));

  router.get('/books/:_id/', api.http(api.books.getBookInfo));
  router.get('/books/:_id/content', api.http(api.books.getBookContent));
  router.post('/books/:_id/progress',getUserInfo, api.http(api.books.updateReadingProgress));
  router.get('/books/:_id/progress',getUserInfo, api.http(api.books.getReadingProgress));

  router.post('/users', api.http(api.users.addUser));
  router.post('/auth', api.http(api.auth.basic));
  router.get('/auth', getUserInfo, api.http(api.auth.checkStatus));

  return router;
};

module.exports = apiRoutes;
