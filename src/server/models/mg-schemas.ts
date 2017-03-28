import mongoose from 'mongoose'
import i18n from '../utils/i18n'
import validator from '../utils/validator'


export const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, i18n('errors.validation.missingRequired', 'username')],
    min: [5, i18n('errors.validation.valueLimit.minLength', 'name')],
    max: [20, i18n('errors.validation.valueLimit.maxLength', 'name')]
  },
  password: {
    type: String,
    validate: {
      validator: validator.isAlphanumeric,
      message: i18n('errors.validation.valueLimit.alphanumeric', 'slug')
    }
  },
  description: String,
})

export const authorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'no name, wtf??']
  },
  slug: {
    type: String,
    validate: {
      validator: validator.isAlphanumeric,
      message: i18n('errors.validation.valueLimit.alphanumeric', 'slug')
    }
  },
  description: String,
})
