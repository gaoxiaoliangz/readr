'use strict'
const schemas = require('./schemas')
const ApiMethods = require('./api-methods')
// const humps = require('humps')

const books = new ApiMethods(schemas.book)
const authors = new ApiMethods(schemas.author)
const collections = new ApiMethods(schemas.collection)

module.exports = {
  books,
  authors,
  collections
}
