'use strict'
// const humps = require('humps')
// const utils = require('./utils')
// const _ = require('lodash')
const Validation = require('../data/validation')
const DataTypes = require('./data-types')

const collection = {
  baseTable: 'collections',
  fields: {
    name: {
      type: DataTypes.String
    },
    items: {
      type: DataTypes.arrayOf(DataTypes.ID),
      ref: {
        table: 'books',
        fields: ['title', 'author', 'description']
      }
    },
    creator_id: {
      type: DataTypes.ID,
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
      includeInSearch: true,
      required: true,
      validators: [
        // [Validation.validators.string, 'not string!'],
        // [Validation.validators.lengthGreaterThan(6), 'not long enough!'],
      ]
    },
    slug: {
      includeInSearch: true
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
