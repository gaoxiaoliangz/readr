const models = require('../../models')


const books = {
  _publicMethods: [
    {
      name: 'add',
      url: '/books',
      httpMethod: 'post'
    }
  ],

  add(data) {
    return models.book.insert(data.object)
  }
}

module.exports = books
