import express from 'express'
import session from 'express-session'
import routes from './routes/index.ts'
import bootServer from './bootstrap'
import config from './config'
import hotModuleReplacement from './dev-tools/hot-module-replacement'
const path = require('path')
const morgan = require('morgan')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const MongoStore = (require('connect-mongo') as any)(session)
const app = express()
const runtimeOptions = require('./utils/runtime-options')
const controllers = require('./controllers')

function initialize(basePath) {
  app.use(session({
    secret: 'key',
    cookie: {
      maxAge: 7 * 24 * 60 * 60 * 1000,
      expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
    },
    resave: true,
    saveUninitialized: true,
    store: new MongoStore({ url: config.db.host + 'readr_session' })
  }))

  // it won't work if placed in the wrong position
  if (runtimeOptions.hmr) {
    app.use(hotModuleReplacement())
  }

  app.use(bodyParser.urlencoded({ limit: '5mb', extended: false }))
  app.use(bodyParser.json({ limit: '5mb' }))
  app.use(cookieParser())
  app.set('views', path.join(basePath, 'src/client/views'))
  app.set('view engine', 'jade')
  app.use(express.static(path.join(basePath, 'assets')))

  // log error info
  app.use(morgan('dev', {
    skip(req, res) { return res.statusCode < 400 }
  }))

  // api routing
  app.use(routes.apiBaseUri, routes.api)

  // logout
  app.use(controllers.logout())

  // frontend routing
  app.use(routes.view)
  // app.use((req, res) => {
  //   res.send('yes')
  // })
  // if (runtimeOptions.serverRouting) {
  //   app.use(routes.handleFrontendRouting(), controllers.render(runtimeOptions.serverRendering))  
  // } else {
  //   app.use(routes.simpleRouter())
  // }

  return bootServer(app, runtimeOptions.env)
}

module.exports = initialize
