'use strict';

var _reactRouter = require('react-router');

var _reactRouter2 = _interopRequireDefault(_reactRouter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
var reactRoutes = require('./modules_es5/routes').default;
var configureStore = require('./modules_es5/store/configureStore').default;


var store = configureStore();
var initialState = store.getState();

// const html = renderToString(
//   <Provider store={store}>
//     <div>
//       <App />
//     </div>
//   </Provider>
// )

app.use(routes.apiBaseUri, routes.api());
app.get("*", function (req, res, next) {
  (0, _reactRouter.match)({ routes: reactRoutes, location: req.url }, function (error, redirectLocation, renderProps) {
    if (error) {
      res.status(500).render('error', {
        message: error.message,
        error: env === 'development' ? error : {},
        env: env
      });
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    } else if (renderProps) {
      res.status(200).render('index', {
        env: env,
        html: renderToString(React.createElement(_reactRouter.RouterContext, renderProps)),
        initialState: JSON.stringify(initialState)
      });
    } else {
      var err = new Error('Not Found');
      err.status = 404;
      res.status(404).render('error', {
        message: err.message,
        error: env === 'development' ? err : {},
        env: env
      });
    }
  });
});

// without server rendering
// app.get("/", routes.frontend(env));

module.exports = app;
