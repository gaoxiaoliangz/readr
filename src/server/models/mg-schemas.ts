import { Schema } from 'mongoose'
import i18n from '../utils/i18n'
import validator from 'validator'

const ObjectId = Schema.Types.ObjectId

export const authorFields = {
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
}

export const authorSchema = new Schema(authorFields)

export const bookFields = {
  title: {
    required: true,
    type: String,
  },
  authors: [{
    ref: 'Author',
    type: ObjectId
  }],
  description: String,
  cover: String,
  file: {
    ref: 'File',
    required: true,
    type: ObjectId
  },
  content: {
    type: Object,
    hooks: {
      pre: (next, root, args, request) => {
        // todo
        // authorize the logged in user based on the request
        // throws error if the user has no right to request the user names
        next('pre')
      },
      // manipulate response
      post: [
        (next, name) => next(`${name} first hook`),
        (next, name) => next(`${name} & second hook`)
      ]
    }
  }
}

export const bookSchema = new Schema(bookFields)

export const collectionFields = {
  name: {
    required: true,
    type: String,
  },
  items: [{
    required: true,
    ref: 'Book',
    type: ObjectId,
  }],
  description: String,
  creator: {
    ref: 'User',
    required: true,
    type: ObjectId,
  }
}

export const collectionSchema = new Schema(collectionFields)

export const fileFields = {
  filename: {
    required: true,
    type: String
  },
  content: {
    required: true,
    type: Buffer,
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
}

export const fileSchema = new Schema(fileFields)

export const progressFields = {
  percentage: {
    required: true,
    type: Number
  },
  user_id: {
    type: String,
    required: true
  },
  book_id: {
    type: String,
    required: true
  }
}

export const progressSchema = new Schema(progressFields)

export const tagFields = {
  name: {
    required: true,
    type: String,
  },
  slug: {
    unique: true,
    type: String,
  },
  description: {
    type: String
  }
}

export const tagSchema = new Schema(tagFields)

export const userFields = {
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
    type: String,
    unique: true,
    validate: {
      validator: validator.isEmail,
      message: i18n('errors.validation.valueLimit.invalidFormat', 'email')
    }
  },
  role: {
    type: String,
    required: true
  }
}

export const userSchema = new Schema(userFields)
