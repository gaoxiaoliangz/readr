var express = require('express'),
    api = require('../api'),
    session = require('express-session');

function apiRoutes() {
  var router = express.Router();

  function getUserInfo(req,res,next){
    // console.log('> routes/api.js');
    // console.log(req.session);

    if(req.session.userinfo) {
      req.user = {
        id: req.session.userinfo.username
      }
    }

    next();
  }

  router.get('/books', api.http(api.books.getAllBooks));
  router.post('/books',getUserInfo, api.http(api.books.addBook));

  router.get('/books/:id/', api.http(api.books.getBookInfo));
  router.get('/books/:id/content', api.http(api.books.getBookContent));
  router.post('/books/:book_id/progress',getUserInfo, api.http(api.books.updateReadingProgress));
  router.get('/books/:book_id/progress',getUserInfo, api.http(api.books.getReadingProgress));

  router.post('/users', api.http(api.users.addUser));
  router.post('/auth', api.http(api.auth.basic));
  router.get('/auth', getUserInfo, api.http(api.auth.checkStatus));

  return router;
}

module.exports = apiRoutes;
