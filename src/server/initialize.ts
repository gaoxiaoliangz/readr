import express from 'express'
import session from 'express-session'
import path from 'path'
import morgan from 'morgan'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
import connectMongo from 'connect-mongo'
import graphQLHTTP from 'express-graphql'
import graffiti from '@risingstack/graffiti'
import { getSchema } from '@risingstack/graffiti-mongoose'
import render from './middleware/render'
import bootServer from './bootstrap'
import apiApp from './api/app'
import getMongoDBUrl from './helpers/getMongoDBUri'
import middleware from './middleware'
import schema from './graphql/schema'
import {
  Author,
  Book,
  Collection,
  File,
  Progress,
  Tag,
  User
} from './models/dataProvider'
import { SESSION_SECRET, REQ_SIZE_LIMIT, PUBLIC_URL, PUBLIC_DIR, COOKIE_MAX_AGE } from './constants'

const debug = require('debug')('readr:init')

const MongoStore = connectMongo(session)
const app = express()

interface InitConfig {
  basePath: string
}

export default function initialize(config: InitConfig) {
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
  app.use('/gql', graphQLHTTP({
    schema,
    graphiql: true,
    pretty: true,
  }))

  // graffiti graphql
  const schemaArr = [Author, Book, Collection, File, Progress, Tag, User]
  const hooks = {
    viewer: {
      pre: (next, root, args, request) => {
        // authorize the logged in user based on the request
        debug('hooks pre')
        next()
      },
      post: (next, value) => {
        debug('hooks post')
        next()
      }
    }
  }
  const graffitiSchema = getSchema(schemaArr, { hooks })
  app.use(graffiti.express({
    schema: graffitiSchema,
    context: {} // custom context
  }))

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
