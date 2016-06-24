'use strict'
// const humps = require('humps')
// const utils = require('./utils')
// const _ = require('lodash')
const Validation = require('../data/validation')
const SchemaTypes = require('./data-types')

const collection = {
  baseTable: 'collections',
  fields: {
    name: {
      type: SchemaTypes.String
    },
    items: {
      type: SchemaTypes.arrayOf(SchemaTypes.ID),
      ref: {
        table: 'books',
        fields: ['title', 'author', 'description']
      }
    },
    creator_id: {
      type: SchemaTypes.ID,
      ref: {
        table: 'users',
        fields: []
      }
    }
  }
}


const book = {
  baseTable: 'books',
  title: {

  },
  content: {

  },
  author: {

  },
  description: {

  }
}


const author = {
  baseTable: 'authors',
  fields: {
    name: {

    },
    slug: {

    },
    description: {

    }
  }
}

module.exports = {
  book,
  collection,
  author,
}
