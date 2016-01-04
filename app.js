var express = require('express');
var app = express();
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');




var controllers = require('./core/controllers');
var api = require('./core/api');
// var users = require('./routes/users');
// var signup = require('./routes/signup');
// var signin = require('./routes/signin');
// var auth = require('./routes/auth');
// var newuser = require('./routes/newuser');
// var addbook = require('./routes/addbook');
// var view = require('./routes/view');



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));

// 添加 limit 参数，提高数据流传输上限
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));




app.use('/', controllers);
app.use('/api', api);
// app.use('/users', users);
// app.use('/signup', signup);
// app.use('/signin', signin);
// app.use('/auth', auth);
// app.use('/newuser', newuser);
// app.use('/addbook', addbook);
// app.use('/view', view);







// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
