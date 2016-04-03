'use strict';

require('app-module-path').addPath('./modules_es5');

var express = require('express');
var app = express();
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var routes = require('./core/routes');
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);
var config = require('./core/config');
var env = app.get('env');
var isWebpackEnabled = process.env.DISABLE_WEBPACK;
var colors = require('colors/safe');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(session({
  secret: 'key wtf',
  cookie: { maxAge: 7 * 24 * 60 * 60 * 1000 },
  resave: true,
  saveUninitialized: true,
  store: new MongoStore({ url: config.dbUrl + 'readr_session' })
}));

console.log(colors.bold.green('\n>> SERVER IS RUNNING\n'));
if (env == "development") {
  if (!isWebpackEnabled) {
    var webpack = require('webpack');
    var webpackDevMiddleware = require('webpack-dev-middleware');
    var webpackHotMiddleware = require('webpack-hot-middleware');
    var config = require('./webpack.config');
    var compiler = webpack(config);
    app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }));
    app.use(webpackHotMiddleware(compiler));
    console.log(colors.blue.underline("webpack dev server working"));
  } else {
    console.log(colors.red.underline("webpack dev server is disabled"));
  }
  console.log(colors.cyan("running in development mode"));
}

app.use(logger('dev'));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// server rendering ///////////////////////////////////////////////////////////
var React = require('react');
var Component = require('react').Component;
var createStore = require('redux').createStore;
var Provider = require('react-redux').Provider;
var renderToString = require('react-dom/server').renderToString;
// var App = require('./modules_es5/app.js').default
// var App = require('./modules_es5/containers/book-store.js').default
// var App = require('./modules_es5/routes/index.js')
var App = require('./modules_es5/containers/add-book.js').default;

var configureStore = require('./modules_es5/store/configureStore').default;
const store = configureStore();
const initialState = store.getState();

const html = renderToString(React.createElement(
  Provider,
  { store: store },
  React.createElement(
    'div',
    null,
    React.createElement(App, null)
  )
));

app.use(routes.apiBaseUri, routes.api());
app.get("/", routes.frontend(env));

app.get("/addbook", function (req, res) {
  res.render('index', {
    env: env,
    html: html,
    initialState: JSON.stringify(initialState)
  });
});

// eror handling /////////////////////////////////////////////////////////////
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: env === 'development' ? err : {},
    env: env
  });
});

module.exports = app;
