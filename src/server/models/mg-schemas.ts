import { Schema } from 'mongoose'
import i18n from '../utils/i18n'
import validator from '../utils/validator'

export const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: [true, i18n('errors.validation.missingRequired', 'username')],
    min: [5, i18n('errors.validation.valueLimit.minLength', 'name')],
    max: [20, i18n('errors.validation.valueLimit.maxLength', 'name')]
  },
  password: {
    type: String,
    required: true,
    min: [6, i18n('errors.validation.valueLimit.minLength', 'password')],
    max: [20, i18n('errors.validation.valueLimit.maxLength', 'password')]
  },
  email: {
    required: true,
    unique: true,
    validate: {
      validator: validator.isEmail,
      message: i18n('errors.validation.valueLimit.invalidFormat', 'email')
    }
  }
})

export const fileSchema = new Schema({
  filename: {
    required: true,
    type: String
  },
  content: {
    required: true
  },
  mimetype: {
    type: String
  },
  size: {
    type: String
  },
  encoding: {
    type: String
  },
  hash: {
    type: String,
    unique: true
  },
})

export const progressSchema = new Schema({
  percentage: {
    required: true,
    type: Number
  },
  user_id: {
    type: String
  },
  book_id: {
    type: String
  }
})

export const tagSchema = new Schema({
  name: {
    required: true
  },
  slug: {
    unique: true
  },
  description: {
    type: String
  }
})

export const authorSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  slug: {
    type: String,
    unique: true,
    validate: {
      validator: validator.isAlphanumeric,
      message: i18n('errors.validation.valueLimit.alphanumeric', 'slug')
    }
  },
  description: String,
})

export const bookSchema = new Schema({
  title: {
    required: true
  },
  authors: [{
    ref: 'Author',
    type: String
  }],
  description: String,
  cover: String,
  file: {
    ref: 'File',
    required: true
  }
})

export const collectionSchema = new Schema({
  name: {
    required: true
  },
  items: [{
    required: true,
    ref: 'Book'
  }],
  description: String,
  creator: {
    ref: 'User',
    required: true
  }
})
