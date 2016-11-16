import express from 'express'
import session from 'express-session'
import routes from './routes'
import bootServer from './bootstrap'
import appConfig from '../app.config'
import hotModuleReplacement from './dev-tools/hot-module-replacement'
import options from './options'
import path from 'path'
import middleware from './middleware'
const morgan = require('morgan')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const MongoStore = (require('connect-mongo'))(session)

const app = express()

const PUBLIC_PATH_NAME = 'public'
const SESSION_SECRET = 'key'
const SESSION_MAX_AGE = 7 * 24 * 60 * 60 * 1000
const REQ_SIZE_LIMIT = '5mb'
const MONGO_STORE_URL = `${appConfig.database.host}/${appConfig.database.mongoStoreName}`

export default function initialize(basePath) {
  app.use(session({
    secret: SESSION_SECRET,
    cookie: {
      maxAge: SESSION_MAX_AGE,
      expires: new Date(Date.now() + SESSION_MAX_AGE)
    },
    resave: true,
    saveUninitialized: true,
    store: new MongoStore({ url: MONGO_STORE_URL })
  }))

  // 需要放在开始的位置
  if (options.hot) {
    app.use(hotModuleReplacement())
  }

  app.use(bodyParser.urlencoded({ limit: REQ_SIZE_LIMIT, extended: false }))
  app.use(bodyParser.json({ limit: REQ_SIZE_LIMIT }))
  app.use(cookieParser())
  app.use(express.static(path.join(basePath, PUBLIC_PATH_NAME)))

  // set basePath
  app.use((req, res, next) => {
    req.__basePath = basePath
    next()
  })

  // 所有上传统一接收
  // 这边的 name 是 0，因为尚未弄清楚 jq ajax 里面怎么修改 name
  // app.post(
  //   '/upload',
  //   upload.single('0'),
  //   middleware.logFile,
  //   middleware.handleJSONResponse,
  //   middleware.handleError
  // )

  // log error info
  app.use(morgan('dev', {
    skip(req, res) { return res.statusCode < 400 }
  }))

  // api routing
  app.use(`/${appConfig.api.prefix}`, routes.api())

  // frontend routing
  app.use(middleware.parseContext, routes.pages)

  return bootServer(app, options)
}
