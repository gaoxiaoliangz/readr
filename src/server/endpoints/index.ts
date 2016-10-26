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

// export const findBook = (req, res, next) => {
//   req.apiResults = api.findBook(req.params.book)
//   next()
// }

export const listBooks = (req, res, next) => {
  req.apiResults = api.listBooks(req.query.page || 1)
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

export const testNext = (req, res, next) => {
  next(new Error('test error'))
}
