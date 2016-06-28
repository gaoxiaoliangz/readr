const schemas = require('./schemas')

// isMulti 为 true 的 api 请求会包含两个 id
const endpoints = {
  book: {
    base: '/books',
    methods: {
      browse: [true]
    },
    schema: schemas.book
  },

  author: {
    base: '/authors',
    methods: {
    },
    schema: schemas.author
  },

  // userBookProgress: {
  //   base: '/users/:userId/books/:bookId/progress',
  //   isMulti: true,
  //   methods: {
  //   },
  //   schema: schemas.progress
  // }
}

module.exports = endpoints
