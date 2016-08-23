const models = require('../models')


const books = {
  add(data) {
    return models.book.insert(data)
  }
}

module.exports = books
