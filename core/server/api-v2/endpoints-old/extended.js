'use strict'
  
const userReadingProgress = {
  url: '/users/:userId/books/:bookId/progress',
  methods: {
    edit: [true, {
      upsert: true,
      query() {
        return {}
      }
    }]
  },
  model: 'author'
}

const users = {
  url: '/users',
  methods: {
    add: [true, {
      isRegister: true
    }],
    delete: [false]
  },
  model: 'user'
}

module.exports = [userReadingProgress, users]
