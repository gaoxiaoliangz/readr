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
const app = express()
const hmr = require('./middleware/hmr')
const runtimeOptions = require('./utils/runtime-options')
const controllers = require('./controllers')

function init(basePath) {
  app.use(session({
    secret: 'key',
    cookie: {
      maxAge: 7*24*60*60*1000,
      expires: new Date(Date.now() + 7*24*60*60*1000)
    },
    resave: true,
    saveUninitialized: true,
    store: new MongoStore({ url: config.dbUrl+'readr_session' })
  }))

  // it won't work if placed in the wrong position
  if(runtimeOptions.hmr) {
    app.use(hmr())
  }

  app.use(bodyParser.urlencoded({limit: '5mb', extended: false}))
  app.use(bodyParser.json({limit: '5mb'}))
  app.use(cookieParser())
  app.set('views', path.join(basePath, 'src/jade'))
  app.set('view engine', 'jade')
  app.use(express.static(path.join(basePath, 'assets')))

  // log error info
  app.use(morgan('dev', {
    skip: function (req, res) { return res.statusCode < 400 }
  }))
  
  // api routing
  app.use(routes.apiBaseUri, routes.handleApiRouting())
  app.use(routes.apiBaseUri2, routes.handleApiRouting2())
  
  // logout
  app.use(controllers.logout())
  
  // frontend routing
  if(runtimeOptions.serverRouting) {
    app.use(routes.handleFrontendRouting(), controllers.render(runtimeOptions.serverRendering))  
  }else{
    app.use(routes.simpleRouter())
  }

  return bootServer(app, runtimeOptions.env)
}

module.exports = init
