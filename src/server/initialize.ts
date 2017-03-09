import express from 'express'
import session from 'express-session'
import path from 'path'
import morgan from 'morgan'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
import connectMongo from 'connect-mongo'
import render from './middleware/render'
import bootServer from './bootstrap'
import appConfig from '../app.config'
import routes from './routes'

const MongoStore = connectMongo(session)
const app = express()

const PUBLIC_DIR = 'build/static'
const PUBLIC_URL = '/static'
const SESSION_SECRET = 'key'
const REQ_SIZE_LIMIT = '5mb'
// todo: resolve url
const MONGO_STORE_URL = appConfig.database.host + '/' + appConfig.database.mongoStoreName

interface InitConfig {
  basePath: string
  serviceName: 'api' | 'pages'
  isProduction: boolean
}

export default function initialize(config: InitConfig) {
  const { basePath, serviceName, isProduction } = config

  // locals
  app.locals.basePath = basePath

  app.use(session({
    secret: SESSION_SECRET,
    resave: true,
    saveUninitialized: true,
    store: new MongoStore({ url: MONGO_STORE_URL })
  }))

  app.use(bodyParser.urlencoded({ limit: REQ_SIZE_LIMIT, extended: false }))
  app.use(bodyParser.json({ limit: REQ_SIZE_LIMIT }))
  app.use(cookieParser())
  app.use(PUBLIC_URL, express.static(path.join(basePath, PUBLIC_DIR)))

  switch (serviceName) {
    case 'api':
      // api routing
      app.use(`/${appConfig.api.prefix}`, routes.api())
      break

    case 'pages':
    default:
      app.use(render(isProduction))
      break
  }

  // log error info
  app.use(morgan('dev', {
    skip(req, res) { return res.statusCode < 400 }
  }))

  return bootServer(app, {
    serviceName,
    isProduction
  })
}
