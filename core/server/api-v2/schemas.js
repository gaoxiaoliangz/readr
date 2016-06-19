'use strict'

// const humps = require('humps')
// const utils = require('./utils')
// const _ = require('lodash')
const Validation = require('../data/validation')

const book = {
  table: 'books',
  // fields: {
  //   name: String,
  //   description: String,
  //   content: String
  // }
}

const collection = {
  table: 'collections',
  fields: [
    {
      name: 'name',
      type: 'string',
      // validation: [Validation.validators.string]
    },
    {
      name: 'items',
      type: 'array',
      ref: {
        table: 'books',
        fields: ['name', 'authors', 'description']
      }
    },
    {
      name: 'creator_id',
      type: 'id',
      ref: {
        table: 'users',
        fields: 'all'
      }
    }
  ]
}

const author = {
  table: 'authors',
}

module.exports = {
  book,
  collection,
  author,
}
