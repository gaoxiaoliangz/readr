var express = require('express');
var router = express.Router();
var session = require('express-session');

var home = require('./home'),
    signin = require('./signin'),
    signup = require('./signup');
    view = require('./view');
    books = require('./books');


router.use(
  session({
    secret: 'keyboard cat',
    cookie: { maxAge: 60000 }
  })
);

// views
// router.use(function (req, res, next) {
//   var views = req.session.views;

//   if(!views){
//     req.session.views = 1;
//   }else {
//     req.session.views++;
//   }
//   next();
// });

router.use(function (req, res, next) {
  var excludes = ["/","/signin","/signup","/api/users/auth"];
  if (excludes.indexOf(req.path) == -1) {
    var userId = req.session.userId;

    if (!userId) {
      res.redirect("/signin");
    }else{
      userId = req.session.userId;
      next();
    }
  }else{
    next();
  }
});


router.use('/', home);
router.use('/signin', signin);
router.use('/signup', signup);
router.use('/view', view);
router.use('/books', books);

module.exports = router;
