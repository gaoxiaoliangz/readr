'use strict'
const DataTypes = require('../data-types')
const validator = require('../../utils/validator')

const schemas = {
  author: {
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
          [validator.isEmail, 'Email wrong!']
        ]
      },
      description: {
      }
    }
  },

  book: {
    baseTable: 'books',
    title: {

    },
    content: {

    },
    author: {

    },
    description: {

    }
  },

  collection: {
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
  },

  progress: {
    baseTable: 'reading_progress',
    fields: {
      user_id: {

      },
      book_id: {

      },
      progress: {

      }
    }
  },

  user: {
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
  },
}

module.exports = schemas
