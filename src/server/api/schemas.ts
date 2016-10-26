import Schema from '../models/schema'
import i18n from '../utils/i18n'
import validator from '../utils/validator'
import DataTypes, { arrayOf } from '../data/types'

export const user = new Schema('users', [
  {
    name: 'username',
    required: true,
    unique: true,
    validators: [
      {
        fn: validator.lengthMin(5),
        errorMsg: i18n('errors.validation.valueLimit.minLength', 'name')
      },
      {
        fn: validator.lengthMax(20),
        errorMsg: i18n('errors.validation.valueLimit.maxLength', 'name')
      }
    ]
  },
  {
    name: 'password',
    required: true,
    validators: [
      {
        fn: validator.lengthMin(6),
        errorMsg: i18n('errors.validation.valueLimit.minLength', 'password')
      },
      {
        fn: validator.lengthMax(20),
        errorMsg: i18n('errors.validation.valueLimit.maxLength', 'password')
      }
    ]
  },
  {
    name: 'email',
    required: true,
    unique: true,
    validators: [
      {
        fn: validator.isEmail,
        errorMsg: i18n('errors.validation.valueLimit.invalidFormat', 'email')
      }
    ]
  },
  {
    name: 'role',
    required: true
  }
])

export const progress = new Schema('reading_progress', [
  {
    name: 'percentage',
    required: true,
    type: DataTypes.Number
  },
  {
    name: 'user_id',
    type: DataTypes.ID
  },
  {
    name: 'book_id',
    type: DataTypes.ID
  }
])

export const tag = new Schema('tags', [
  {
    name: 'name',
    required: true
  },
  {
    name: 'slug',
    unique: true
  },
  {
    name: 'description'
  }
])

export const author = new Schema('authors', [
  {
    name: 'name',
    required: true
  },
  {
    name: 'slug',
    unique: true,
    validators: [
      {
        fn: validator.isAlphanumeric,
        errorMsg: i18n('errors.validation.valueLimit.alphanumeric', 'slug')
      }
    ]
  },
  {
    name: 'description'
  }
])

export const book = new Schema('books', [
  {
    name: 'title',
    required: true
  },
  {
    name: 'authors',
    ref: author,
    type: arrayOf(DataTypes.ID)
  },
  {
    name: 'description'
  },
  {
    name: 'cover'
  },
  {
    name: 'content',
    required: true
  }
])

export const collection = new Schema('collections', [
  {
    name: 'name',
    required: true
  },
  {
    name: 'items',
    required: true,
    ref: book,
    type: arrayOf(DataTypes.ID)
  },
  {
    name: 'description'
  },
  {
    name: 'creator',
    required: true,
    ref: user
  }
])

export const file = new Schema('files', [
  {
    name: 'name',
    required: true
  },
  {
    name: 'originalname',
    required: true
  },
  {
    name: 'mimetype'
  },
  {
    name: 'size'
  }
])
