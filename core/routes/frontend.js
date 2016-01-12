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


  // // filter
  // router.use(function (req, res, next) {
  //   var excludes = ["/","/signin","/signup","/api/v0.1/users/auth","/api/v0.1/users/new"];
  //   if (excludes.indexOf(req.path) == -1) {
  //     var userinfo = req.session.userinfo;
  //
  //     if (!userinfo) {
  //       res.redirect("/signin");
  //     }else{
  //       next();
  //     }
  //   }else{
  //     next();
  //   }
  // });




  // index
  router.get('/', function(req, res) {
    var data = {
      userinfo: req.session.userinfo
    };
    res.render('index', data);
  });



  router.get(/^\/((signin|signup|books)\/?)$/, function(req, res){
    var page = req.path.substr(1),
        data = {
          userinfo: req.session.userinfo
        };

    if(page.substr(-1)=="/"){
      page = page.slice(0,-1);
    }
    if(page == "books"){
      res.render('book-list-react', data);
    }else{
      res.render(page);
    }
  });

  ////////////////////////////////////////////////////////////////////////////////////////////////////


  // todo: remove this



  router.get('/view/get_progress/:book_id/:progress', function(req, res, next) {
    res.send("0");
  });

  router.get('/view/set_progress/:book_id/:progress', function(req, res, next) {
    res.send("0");
  });





  router.post('/signin', frontend.handleSignin);
  router.post('/signup', frontend.handleSignup);

  router.get("/logout",function(req, res){
    req.session.destroy();
    res.redirect("/");
  });

  // books
  router.post('/books/new', frontend.handleAddBook);
  router.get('/books/new', frontend.renderAddBook);

  router.get('/books/:_id', function(req, res) {
    var data = {
      book_progress: 0,
      cloud_progress: 0
    }
    var _id = req.params._id;
    data.book_id = _id;
    res.render('book', data);
  });

  return router;
};

module.exports = frontendRoutes;
