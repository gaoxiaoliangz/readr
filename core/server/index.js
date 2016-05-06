const express = require('express')
const path = require('path')
const morgan = require('morgan')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const colors = require('colors/safe')
const routes = require('./routes')
const bootServer = require('./boot')
const config = require('./config')
const startWebpack = require('./webpack')
const app = express()
const isWebpackEnabled = process.argv.indexOf('--webpack') !== -1?true:false
const env = app.get('env')

function init(basePath) {
  app.use(session({
    secret: 'key wtf',
    cookie: {
      maxAge: 7*24*60*60*1000,
      expires: new Date(Date.now() + 7*24*60*60*1000)
    },
    resave: true,
    saveUninitialized: true,
    store: new MongoStore({ url: config.dbUrl+'readr_session' })
  }))

  if(env =="development" && isWebpackEnabled) {
    startWebpack(app)
  }

  app.use(bodyParser.urlencoded({limit: '5mb', extended: false}))
  app.use(bodyParser.json({limit: '5mb'}))
  app.use(cookieParser())
  app.set('views', path.join(basePath, 'views'))
  app.set('view engine', 'jade')
  app.use(express.static(path.join(basePath, 'assets')))

  // handle routing
  app.use(routes.apiBaseUri, routes.api())

  if(env === 'production') {
    app.get("*", routes.frontend(env, true, true))
  }else{
    app.get("*", routes.frontend(env, true, false))
  }

  // error log info
  app.use(morgan('dev', {
    skip: function (req, res) { return res.statusCode < 400 }
  }))

  return bootServer(app, env)
}

module.exports = init
