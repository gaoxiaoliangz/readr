import * as api from '../api'
import _ from 'lodash'
import fs from 'fs'
import makeBasicEndpoint from './make-basic-endpoint'

// basic endpoints
export const author = makeBasicEndpoint(api.author)
export const collection = makeBasicEndpoint(api.collection)
export const book = makeBasicEndpoint(api.book)
export const tag = makeBasicEndpoint(api.tag)
export const user = makeBasicEndpoint(api.user)

// common endpoints
// books
export const addBook = (req, res, next) => {
  // const filepath = `${req.__basePath}/${req.file.path}`
  // const binaryFile = fs.readFileSync(filepath, 'binary')
  req.apiResults.then(loggedFileId => {
    req.apiResults = api.addBook(req.body, loggedFileId)
    next()
  })
}

export const findBook = (req, res, next) => {
  req.apiResults = api.findBook(req.params.book)
  next()
}

export const resolveBookContent = (req, res, next) => {
  req.apiResults = api.resolveBookContent(req.params.book)
  next()
}

export const listBooks = (req, res, next) => {
  req.apiResults = api.listBooks(req.query.page || 1)
  next()
}

// user
export const findUser = (req, res, next) => {
  req.apiResults = api.findUser(req.context.user.id)
  next()
}

export const addUser = (req, res, next) => {
  req.apiResults = api.addUser(req.body)
  next()
}

export const listShelfBooks = (req, res, next) => {
  req.apiResults = api.listShelfBooks(req.context.user.id, req.query.page || 1)
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

// file
export const readFile = (req, res, next) => {
  req.apiResults = api.readFile(req.params.file)
  next()
}

export const delFile = (req, res, next) => {
  req.apiResults = api.delFile(req.params.file)
  next()
}

// other
export const listCollections = (req, res, next) => {
  req.apiResults = api.listCollection(req.query.page || 1)
  next()
}
