var express = require('express'),
    api = require('../api'),
    frontend = require('../controllers/frontend'),
    frontendRoutes;
var session = require('express-session');

frontendRoutes = function frontendRoutes() {

  var data = {
    title: 'readr'
  }

  var router = express.Router();


  router.use(
    session({
      secret: 'keyboard cat',
      cookie: { maxAge: 60000 }
    })
  );



  // filter
  // router.use(function (req, res, next) {
  //   var excludes = ["/","/signin","/signup","/api/users/auth","/api/users/new"];
  //   if (excludes.indexOf(req.path) == -1) {
  //     var userId = req.session.userId;

  //     if (!userId) {
  //       res.redirect("/signin");
  //     }else{
  //       userId = req.session.userId;
  //       next();
  //     }
  //   }else{
  //     next();
  //   }
  // });

  router.get('/', function(req, res, next) {
    var data = {
      title: 'readr'
    };
    data.user = req.session.userId;
    res.render('index', data);
  });

  router.get('/books', function(req, res, next) {
    var json = {
      title: 'readr',
    }
    res.render('book-list-react', json);
  });



  // todo: remove this
  router.get('/get_progress/:book_id/:progress', function(req, res, next) {
    res.send("0");
  });
  router.get('/set_progress/:book_id/:progress', function(req, res, next) {
  });

  router.get('/signin', function(req, res, next) {
    res.render('signin', data);
  });
  router.post('/signin', frontend.handleSignin);

  router.get('/signup', function(req, res, next) {
    res.render('signup', data);
  });

  router.get("/logout",function(req, res){
    req.session.destroy();
    res.redirect("/");
  });

  router.get('/comments', function(req, res, next) {
    res.render('comments', data);
  });

  router.get('/books/new', frontend.renderAddBook);

  router.get('/books/:book_id', function(req, res) {
    var data = {
      title: 'readr',
      book_id: 1,
      book_progress: 0,
      cloud_progress: 0
    }

    var book_id = req.params.book_id;
    data.book_id = book_id;

    res.render('book', data);
  });

  router.post('/books/new', frontend.handleAddBook);
  router.post('/users/new', frontend.handleAddUser);

  return router;
};

module.exports = frontendRoutes;
