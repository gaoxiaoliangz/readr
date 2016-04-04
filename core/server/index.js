require('app-module-path').addPath('./__core__es5');

var express = require('express')
var app = express()
var path = require('path')
var logger = require('morgan')
var cookieParser = require('cookie-parser')
var bodyParser = require('body-parser')
var session = require('express-session')
var MongoStore = require('connect-mongo')(session)

var colors = require('colors/safe')
var routes = require('./routes')
var boot = require('./boot')
var config = require('./config')
var startWebpack = require('./webpack')

var isWebpackEnabled = process.env.DISABLE_WEBPACK
var env = app.get('env')

function init(basePath) {
  // view engine setup
  console.log(path.join(basePath, 'views'));

  app.set('views', path.join(basePath, 'views'));
  app.set('view engine', 'jade');

  app.use(session({
    secret: 'key wtf',
    cookie: { maxAge: 7*24*60*60*1000 },
    resave: true,
    saveUninitialized: true,
    store: new MongoStore({ url: config.dbUrl+'readr_session' })
  }));

  console.log(colors.bold.green('\n>> SERVER IS RUNNING\n'));
  if(env =="development") {
    if(!isWebpackEnabled){
      startWebpack(app)
    }else{
      console.log(colors.red.underline("webpack dev server is disabled"));
    }
    console.log(colors.cyan("running in development mode"));
  }

  app.use(logger('dev'));
  app.use(bodyParser.json({limit: '50mb'}));
  app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
  app.use(cookieParser());
  app.use(express.static(path.join(basePath, 'assets')));


  // without server rendering
  app.get("/", routes.frontend(env));

  boot(app)
}

// module.exports = init
export default init
