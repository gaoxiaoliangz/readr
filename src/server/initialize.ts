import express from 'express'
import session from 'express-session'
import routes from './routes'
import bootServer from './bootstrap'
import config from './config'
import hotModuleReplacement from './dev-tools/hot-module-replacement'
import runtimeOptions from './utils/runtime-options'
import path from 'path'
import middleware from './middleware'
const morgan = require('morgan')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const MongoStore = (require('connect-mongo'))(session)

const app = express()

export default function initialize(basePath) {
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

  // 需要放在开始的位置
  if (runtimeOptions.hmr) {
    app.use(hotModuleReplacement())
  }

  app.use(bodyParser.urlencoded({ limit: '5mb', extended: false }))
  app.use(bodyParser.json({ limit: '5mb' }))
  app.use(cookieParser())
  app.use(express.static(path.join(basePath, 'assets')))

  // log error info
  app.use(morgan('dev', {
    skip(req, res) { return res.statusCode < 400 }
  }))

  // api routing
  app.use(routes.apiBaseUri, routes.api)

  // frontend routing
  app.use(middleware.parseContext, routes.pages as any)

  return bootServer(app, runtimeOptions)
}
