var express = require('express');
var router = express.Router();
var session = require('express-session');
var app = express();
var parseurl = require('parseurl');



router.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}))

// router.use(session({
//   secret: 'recommand 128 bytes random string', // 建议使用 128 个字符的随机字符串
//   cookie: { maxAge: 60 * 1000 }
// }));

// app.use(function (req, res, next) {
//   var views = req.session.views

//   if (!views) {
//     views = req.session.views = {}
//   }

//   // get the url pathname
//   var pathname = parseurl(req).pathname

//   // count the views
//   views[pathname] = (views[pathname] || 0) + 1

//   next()
// })
var data={};
router.use(function (req, res, next) {
  var views = req.session.views?req.session.views:null;
  // var views;

  if (!views) {
    views = req.session.views = {}
  }

  // get the url pathname
  var pathname = parseurl(req).pathname

  // count the views
  views[pathname] = (views[pathname] || 0) + 1

  
  data = {
    title: 'readr',
    views: req.session.views['/']
  }

  next()
})


// router.get('/', function (req, res) {

//   // 检查 session 中的 isVisit 字段
//   // 如果存在则增加一次，否则为 session 设置 isVisit 字段，并初始化为 1。
//   if(req.session.isVisit) {
//     req.session.isVisit++;
//     res.send('<p>第 ' + req.session.isVisit + '次来此页面</p>');
//   } else {
//     req.session.isVisit = 1;
//     res.send("欢迎第一次来这里");
//     console.log(req.session);
//   }
// });
// app.use(session({
//   secret: 'keyboard cat',
//   resave: false,
//   saveUninitialized: true
// }));

// if (!views) {
//   views = req.session.views = 1;
// }

// var data = {
//   title: 'readr'
// }

router.get('/', function(req, res, next) {
  res.render('index', data);
});

// var data = {
//   title: 'readr'
// }

// app.get('/', function(req, res, next) {
//   res.render('index', data);
// });

module.exports = router;
// module.exports = app;
