'use strict'

const config = require('../config')
// const humps = require('humps')
// const utils = require('./utils')
// const _ = require('lodash')

const mongoose = require('mongoose')
// const Schema = mongoose.Schema

mongoose.connect(config.dbUrl + config.dbName)

const Book = mongoose.model('Book', {
  name: String,
  description: String,
  content: String
})

const Collection = mongoose.model('Collection', {
  name: String,
  description: String,
  items: Array
})

module.exports = {
  Book,
  Collection
}
