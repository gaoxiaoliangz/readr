'use strict'
const schemas = require('./schemas')
const ApiMethods = require('./api-methods')

// const humps = require('humps')
// const utils = require('./utils')
// const _ = require('lodash')
// const mongoose = require('mongoose')
// const Schema = mongoose.Schema

const books = new ApiMethods(schemas.book)
const authors = new ApiMethods(schemas.author)

module.exports = {
  books,
  authors
}
