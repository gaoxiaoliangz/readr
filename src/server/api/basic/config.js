/**
 * Basic API configuration
 * 
 * 基本 api 都有 add, list, find, update, remove 五个方法
 * 如果同名 api 在 extended 里定义，则会重载对应基本 api 里的方法
 * excludedMethods: 用来排出无需生成的 api 方法
 * privateMethods:被包含的 api 方法将不会输出到 router
 * 
 * 生成的 api 里面包含 _publicMethods: { name, url, httpMethod }[]
 */

const config = {
  authors: {
    model: 'author',
    url: '/authors',
    excludedMethods: [],
    privateMethods: []
  },

  collections: {
    model: 'collection',
    url: '/collections'
  },

  books: {
    model: 'book',
    url: '/books',
    excludedMethods: ['add']
  },

  tags: {
    model: 'tag',
    url: '/tags'
  },

  users: {
    model: 'user',
    url: '/users',
    excludedMethods: ['add', 'find', 'update', 'remove']
  },
}

module.exports = config
