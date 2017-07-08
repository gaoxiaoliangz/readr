import express from 'express'
import session from 'express-session'
import path from 'path'
import morgan from 'morgan'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
import connectMongo from 'connect-mongo'
import graphQLHTTP from 'express-graphql'
import render from './middleware/render'
import bootServer from './bootstrap'
import apiApp from './api/app'
import getMongoDBUrl from './helpers/getMongoDBUri'
import middleware from './middleware'
import schema from './graphql/schema'
import { SESSION_SECRET, REQ_SIZE_LIMIT, PUBLIC_URL, PUBLIC_DIR, COOKIE_MAX_AGE } from './constants'

const debug = require('debug')('readr:init')

const MongoStore = connectMongo(session)
const app = express()

interface InitConfig {
  basePath: string
}

export default function initialize(config: InitConfig) {
  debug('app init')
  const { basePath } = config

  // locals
  app.locals.basePath = basePath

  app.use(session({
    secret: SESSION_SECRET,
    resave: true,
    saveUninitialized: true,
    store: new MongoStore({ url: getMongoDBUrl() }),
    cookie: {
      maxAge: COOKIE_MAX_AGE
    }
  }))
  app.use(bodyParser.urlencoded({ limit: REQ_SIZE_LIMIT, extended: false }))
  app.use(bodyParser.json({ limit: REQ_SIZE_LIMIT }))
  app.use(cookieParser())

  // handle assets
  app.use(PUBLIC_URL, express.static(path.join(basePath, PUBLIC_DIR)))

  app.use(middleware.parseContext)

  // graphql api
  app.use('/gql', (req, res, next) => {
    const useGraphiql = process.env.NODE_ENV !== 'production' || req['user'].role === 'admin'
    const query = req.query.query || req.body.query
    if (query && query.length > 4000) {
      // None of our app's queries are this long
      // Probably indicates someone trying to send an overly expensive query
      res.send({
        data: null,
        errors: [{
          message: 'Query too large!'
        }]
      })
    }

    graphQLHTTP({
      schema,
      graphiql: useGraphiql,
      pretty: true,
    })(req, res)
  })

  // rest api routing
  app.use(process.env.REST_API_PATH, apiApp())

  // render view
  app.use(render())

  // log error info
  app.use(morgan('dev', {
    skip(req, res) { return res.statusCode < 400 }
  }))

  return bootServer(app)
}
