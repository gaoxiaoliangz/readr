'use strict'
// const humps = require('humps')
// const utils = require('./utils')
// const _ = require('lodash')
// const Validation = require('../data/validation')
const Validator = require('validator')
const DataTypes = require('./data-types')


const validator = {
  lengthMin(len) {
    return input => {
      return input.length >= len
    }
  },

  lengthMax(len) {
    return input => {
      return input.length <= len
    }
  }
}

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
    creator: {
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
        [validator.lengthMin(6), 'Too short!'],
        [validator.lengthMax(12), 'Too long!'],
      ]
    },
    slug: {
      includeInSearch: true
    },
    email: {
      validators: [
        [Validator.isEmail, 'Email wrong!']
      ]
    },
    description: {
    }
  }
}


const users = {
  baseTable: 'users',
  fields: {
    username: {
      required: true
    },
    password: {
      required: true
    },
    email: {
      required: true
    },
    role: {
      required: true
    }
  }
}

module.exports = {
  book,
  collection,
  author,
  users
}
