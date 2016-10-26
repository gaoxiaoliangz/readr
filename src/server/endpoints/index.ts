import * as api from '../api'
import _ from 'lodash'
import makeBasicEndpoint from './make-basic-endpoint'

// basic endpoint start
export const author = makeBasicEndpoint(api.author)
export const collection = makeBasicEndpoint(api.collection)
export const book = makeBasicEndpoint(api.book)
export const tag = makeBasicEndpoint(api.tag)
export const user = makeBasicEndpoint(api.user)
// end of basic endpoint

// 模板
// export const fn = (req, res, next) => {
//   req.apiResults = api.someFn()
//   next()
// }

// export const findBook = (req, res, next) => {
//   req.apiResults = api.findBook(req.params.book)
//   next()
// }

export const findUser = (req, res, next) => {
  req.apiResults = api.findUser(req.context.user.id)
  next()
}

export const addUser = (req, res, next) => {
  req.apiResults = api.addUser(req.body)
  next()
}

export const listBooks = (req, res, next) => {
  req.apiResults = api.listBooks(req.query.page || 1)
  next()
}

export const listShelfBooks = (req, res, next) => {
  req.apiResults = api.listShelfBooks(req.context.user.id, req.query.page || 1)
  next()
}

export const listCollections = (req, res, next) => {
  req.apiResults = api.listCollection(req.query.page || 1)
  next()
}

export const getReadingProgress = (req, res, next) => {
  req.apiResults = api.getReadingProgress(req.context.user.id, req.params.book)
  next()
}

export const setReadingProgress = (req, res, next) => {
  req.apiResults = api.setReadingProgress(req.context.user.id, req.params.book, req.body)
  next()
}

export const readFile = (req, res, next) => {
  req.apiResults = api.readFile(req.params.file, req.__basePath)
  next()
}
