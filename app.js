var express = require('express'),
    app = express(),
    path = require('path'),
    logger = require('morgan'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    routes = require('./core/routes'),
    session = require('express-session'),
    MongoStore = require('connect-mongo')(session),
    config = require('./config'),
    env = app.get('env'),
    isWebpackEnabled = process.env.DISABLE_WEBPACK,
    colors = require('colors/safe');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(session({
  secret: 'key wtf',
  cookie: { maxAge: 7*24*60*60*1000 },
  resave: true,
  saveUninitialized: true,
  store: new MongoStore({ url: config.dbUrl+'readr_session' })
}));

console.log(colors.bold.green('\n------------------------- SERVER IS RUNNING -------------------------\n'));

if(env =="development") {
  if(!isWebpackEnabled){
    var webpack = require('webpack')
    var webpackDevMiddleware = require('webpack-dev-middleware')
    var webpackHotMiddleware = require('webpack-hot-middleware')
    var config = require('./webpack.config')
    var compiler = webpack(config)
    app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }))
    app.use(webpackHotMiddleware(compiler))
    console.log(colors.blue.underline("webpack dev server working"));
  }else{
    console.log(colors.red.underline("webpack dev server is disabled"));
  }
  console.log(colors.cyan("running in development mode"));
}

app.use(logger('dev'));
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes.apiBaseUri, routes.api());
app.use("/", routes.frontend(env));


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});


// error handlers //////////////////////////////////////////////////////////////

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
