const schemas = require('./schemas')

// 支持的选项
// methods: {
//   add: {
//     isRegister // 注册
//   },
//   edit: {
//     upsert,
//     multi
//   }
// }

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

  tag: {
    base: '/tags',
    methods: {},
    schema: schemas.tag
  },

  user: {
    base: '/users',
    methods: {
      add: [true, {
        isRegister: true
      }]
    },
    schema: schemas.user
  },

  userBookProgress: {
    base: '/users/:userId/books/:bookId/progress',
    isMulti: true,
    methods: {
      edit: [true, {
        upsert: true
      }]
    },
    schema: schemas.progress
  },

  
}

module.exports = endpoints