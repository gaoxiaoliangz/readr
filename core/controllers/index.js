var express = require('express');
var router = express.Router();
var session = require('express-session');

var home = require('./home'),
    view = require('./view'),
    books = require('./books');


router.use(
  session({
    secret: 'keyboard cat',
    cookie: { maxAge: 60000 }
  })
);


var data = {
  title: 'readr'
}



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


router.get('/signin', function(req, res, next) {
  res.render('signin', data);
});

router.get('/signup', function(req, res, next) {
  res.render('signup', data);
});

router.get("/logout",function(req, res){
  req.session.destroy();
  res.redirect("/");
});



router.use('/', home);
router.use('/view', view);
router.use('/books', books);

module.exports = router;
