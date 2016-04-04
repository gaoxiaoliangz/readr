process.env.NODE_ENV = process.env.NODE_ENV || 'development'

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
var bootServer = require('./boot')
var config = require('./config')
var startWebpack = require('./webpack')

var isWebpackEnabled = process.env.ENABLE_WEBPACK
var env = app.get('env')

function init(basePath) {
  app.set('views', path.join(basePath, 'views'))
  app.set('view engine', 'jade')
  app.use(express.static(path.join(basePath, 'assets')))

  app.use(session({
    secret: 'key wtf',
    cookie: { maxAge: 7*24*60*60*1000 },
    resave: true,
    saveUninitialized: true,
    store: new MongoStore({ url: config.dbUrl+'readr_session' })
  }))

  if(env =="development" && isWebpackEnabled) {
    startWebpack(app)
  }

  // app.use(bodyParser.json({limit: '50mb'}))
  app.use(bodyParser.urlencoded({limit: '50mb', extended: true}))
  app.use(cookieParser())
  app.use(logger('dev'))

  app.use(routes.apiBaseUri, routes.api())
  app.get("*", routes.frontend(env, true))

  bootServer(app, env)
}

module.exports = init
