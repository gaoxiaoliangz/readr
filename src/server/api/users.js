const models = require('../models')
const _ = require('lodash')

const users = {
  add(data) {
    return models.user.insert(_.assign({}, data, {
      role: 'user'
    }))
  }
}

module.exports = users
