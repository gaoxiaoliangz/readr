var express = require('express'),
    api = require('../api'),
    frontend = require('../controllers/frontend'),
    session = require('express-session'),

    frontendRoutes;


frontendRoutes = function frontendRoutes() {
  var router = express.Router();
  
  function _genSecret(len){
    return parseInt(Math.random()*Math.pow(10,len));
  }

  router.use(session({
    secret: "s"+_genSecret(5),
    cookie: { maxAge: 60000 },
    resave: true,
    saveUninitialized: true,
    // store: sessionStore, // connect-mongo session store
    // proxy: true
  }));


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


  // todo: remove this
  router.get('/view/get_progress/:book_id/:progress', function(req, res, next) {
    res.send("0");
  });

  router.get('/view/set_progress/:book_id/:progress', function(req, res, next) {
    res.send("0");
  });



  // index
  router.get('/', function(req, res) {
    var data = {
      userinfo: req.session.userinfo
    }

    res.render('index', data);
  });

  // site entry
  router.post('/signin', frontend.handleSignin);

  router.get('/signin', function(req, res) {
    res.render('signin');
  });

  router.post('/signup', frontend.handleSignup);

  router.get('/signup', function(req, res) {
    res.render('signup');
  });

  router.get("/logout",function(req, res){
    req.session.destroy();
    res.redirect("/");
  });

  // books
  router.post('/books/new', frontend.handleAddBook);

  router.get('/books/new', frontend.renderAddBook);

  router.get('/books', function(req, res) {
    res.render('book-list-react');
  });

  // todo: opt
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

  return router;
};

module.exports = frontendRoutes;
