import * as api from '../api-v3'
import _ from 'lodash'

export const findBook = (req, res, next) => {
  req.apiResults = api.findBook(req.params.book)
  next()
}

export const listBooks = (req, res, next) => {
  req.apiResults = api.listBooks(req.query.page || 1)
  next()
}

export const listCollections = (req, res, next) => {
  req.apiResults = api.listCollection(req.query.page || 1)
  next()
}
