var express = require('express'),
    api = require('../api'),
    frontend = require('../controllers/frontend'),
    config = require('../../config'),

    frontendRoutes;


frontendRoutes = function frontendRoutes() {
  var router = express.Router();

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


  function getUserInfo(req,res,next){
    console.log("fuck");
    console.log(req.session.userinfo.username);
    // req.user = {
    //   id: req.session.userinfo.username
    // }
    next();
  }

  // index
  router.get('/', getUserInfo, function(req, res) {
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

  // books
  router.post('/books/new', frontend.handleAddBook);
  router.get('/books/new', frontend.renderAddBook);
  router.get('/books/:_id', frontend.renderBook);

  router.post('/signin', frontend.handleSignin);
  router.post('/signup', frontend.handleSignup);

  router.get("/logout",function(req, res){
    req.session.destroy();
    res.redirect("/");
  });

  return router;
};

module.exports = frontendRoutes;
