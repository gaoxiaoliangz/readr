const models = require('../models')
const _ = require('lodash')

const users = {
  _publicMethods: [
    {
      name: 'add',
      url: '/users',
      httpMethod: 'post'
    }
  ],
  add(data) {
    return models.user.insert(_.assign({}, data.object, {
      role: 'user'
    }))
  }
}

module.exports = users
