'use strict'
const DataTypes = require('../data-types')
const validator = require('../../utils/validator')
const i18n = require('../../utils/i18n')

const schemas = {
  author: {
    baseTable: 'authors',
    fields: {
      name: {
        includeInSearch: true,
        required: true,
        validators: [
          [validator.lengthMin(5), i18n('errors.validation.valueLimit.minLength', 'name')],
          [validator.lengthMax(20), i18n('errors.validation.valueLimit.maxLength', 'name')],
        ]
      },
      slug: {
        includeInSearch: true
      },
      description: {
      }
    }
  },

  book: {
    baseTable: 'books',
    fields: {
      title: {
        includeInSearch: true,
        required: true,
      },
      author: {
        includeInSearch: true,
        required: true,
        type: DataTypes.arrayOf(DataTypes.ID),
        ref: {
          table: 'authors',
          fields: ['name']
        }
      },
      description: {
      },
      content: {
        required: true,
      },
    }
  },

  collection: {
    baseTable: 'collections',
    fields: {
      name: {
        type: DataTypes.String,
        includeInSearch: true,
        required: true,
      },
      items: {
        required: true,
        type: DataTypes.arrayOf(DataTypes.ID),
        ref: {
          table: 'books',
          fields: ['_id', 'title', 'author', 'description']
        }
      },
      description: {},
      creator: {
        required: true,
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
        required: true,
      },
      book_id: {
        required: true,
      },
      progress: {
        required: true,
      }
    }
  },

  user: {
    baseTable: 'users',
    fields: {
      username: {
        required: true,
        validators: [
          [validator.lengthMin(5), i18n('errors.validation.valueLimit.minLength', 'username')],
          [validator.lengthMax(20), i18n('errors.validation.valueLimit.maxLength', 'username')],
        ]
      },
      password: {
        required: true
      },
      email: {
        required: true,
        validators: [
          [validator.isEmail, 'Email wrong!']
        ]
      },
      role: {
        required: true
      }
    }
  },
}

module.exports = schemas
