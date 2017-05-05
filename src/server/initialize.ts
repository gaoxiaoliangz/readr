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
import * as CONSTANTS from '../constants'
import getMongoStoreUrl from './helpers/getMongoStoreUrl'
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
} from './models/data-provider'
const debug = require('debug')('readr:init')

const MongoStore = connectMongo(session)
const app = express()

const PUBLIC_DIR = 'build/static'
const PUBLIC_URL = '/static'
const SESSION_SECRET = 'key'
const REQ_SIZE_LIMIT = '5mb'
const MONGO_STORE_URL = getMongoStoreUrl()

interface InitConfig {
  basePath: string
  isProduction: boolean
}

export default function initialize(config: InitConfig) {
  const { basePath, isProduction } = config

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
  app.use(`/${CONSTANTS.API_PREFIX}`, apiApp())

  // render view
  app.use(render(isProduction))

  // log error info
  app.use(morgan('dev', {
    skip(req, res) { return res.statusCode < 400 }
  }))

  return bootServer(app, {
    isProduction
  })
}
