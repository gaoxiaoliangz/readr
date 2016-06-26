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
      includeInSearch: true
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
