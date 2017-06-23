import { Schema } from 'mongoose'
import i18n from '../utils/i18n'
import validator from 'validator'

const ObjectId = Schema.Types.ObjectId

const additionalSchemaOptions = {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
}

// authors
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

export const authorSchema = new Schema(authorFields, additionalSchemaOptions)

// books
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
  provided_by: {
    type: ObjectId,
    required: true,
    ref: 'User'
  },
  published: {
    type: Boolean,
    required: true
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

export const bookSchema = new Schema(bookFields, additionalSchemaOptions)
// bookSchema.pre('findOne', function(next) {
//   next()
// })

// collections
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

export const collectionSchema = new Schema(collectionFields, additionalSchemaOptions)

// files
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

export const fileSchema = new Schema(fileFields, additionalSchemaOptions)

// posts
export const postFields = {
  slug: {
    type: String,
    unique: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  author: {
    ref: 'Author',
    required: true,
    type: ObjectId
  },
  tags: [{
    ref: 'Tag',
    type: ObjectId
  }],
  markdown: {
    type: String,
    required: true
  },
  visibility: {
    type: Number,
    required: true
  },
  status: {
    type: Number,
    required: true
  },
  image: {
    type: String
  },
  category: {
    type: Number,
    required: true
  }
}

export const postSchema = new Schema(postFields, additionalSchemaOptions)

// progresses
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

export const progressSchema = new Schema(progressFields, additionalSchemaOptions)

// slides
export const slideFields = {
  url: {
    required: true,
    type: String,
  },
  picture: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  editor: {
    type: String,
    required: true
  }
}

export const slideSchema = new Schema(slideFields, additionalSchemaOptions)

// tags
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

export const tagSchema = new Schema(tagFields, additionalSchemaOptions)

// users
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
  bio: {
    type: String
  },
  display_name: {
    type: String,
    min: [1, i18n('errors.validation.valueLimit.minLength', 'name')],
    max: [30, i18n('errors.validation.valueLimit.maxLength', 'name')]
  },
  email: {
    required: true,
    type: String,
    unique: true,
    validate: {
      // mongoose deprecated valiators that take 2 args
      validator: (str) => validator.isEmail(str),
      message: i18n('errors.validation.valueLimit.invalidFormat', 'email')
    }
  },
  role: {
    type: String,
    required: true
  }
}

export const userSchema = new Schema(userFields, additionalSchemaOptions)
