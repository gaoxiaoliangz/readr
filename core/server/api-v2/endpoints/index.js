const extendedEndpoints = require('./extended')

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
const endpoints = [
  {
    url: '/authors',
    model: 'author'
  },

  {
    url: '/books',
    methods: {
      delete: [false]
    },
    model: 'book'
  },

  {
    url: '/books/:id',
    model: 'book'
  },

  {
    url: '/collections',
    methods: {
      delete: [false]
    },
    model: 'collection'
  },

  {
    url: '/tags',
    methods: {
      delete: [false]
    },
    model: 'tag'
  }
]

module.exports = endpoints.concat(extendedEndpoints)
