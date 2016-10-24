import Schema from '../models-v3/schema'
import i18n from '../utils/i18n'
import validator from '../utils/validator'

export const author = new Schema('authors', [
  {
    name: 'name',
    required: true
  }, {
    name: 'slug'
  },
  {
    name: 'description'
  }
])

export const book = new Schema('books', [
  {
    name: 'title',
    required: true,
    validators: [
      {
        fn: validator.lengthMin(6),
        errorMsg: i18n('errors.validation.valueLimit.minLength', 'password')
      }
    ]
  }, {
    name: 'authors',
    ref: author
  },
  {
    name: 'description'
  }, {
    name: 'cover'
  },
  {
    name: 'content',
    required: true
  }
])
