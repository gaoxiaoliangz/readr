const schemas = require('./schemas')

// isMulti 为 true 的 api 请求会包含两个 id
const endpoints = {
  author: {
    base: '/authors',
    methods: {
    },
    schema: schemas.author
  },

  book: {
    base: '/books',
    methods: {
      browse: [true]
    },
    schema: schemas.book
  },

  collection: {
    base: '/collections',
    methods: {
    },
    schema: schemas.collection
  },

  user: {
    base: '/users',
    methods: {
    },
    schema: schemas.user
  },

  userBookProgress: {
    base: '/users/:userId/books/:bookId/progress',
    isMulti: true,
    methods: {
    },
    schema: schemas.progress
  }
}

module.exports = endpoints
