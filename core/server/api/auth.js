'use strict'
const models = require('../models')
const Promise = require('bluebird')

const auth = {
  checkStatus(options) {
    let data = { role: 'visitor'}

    if(options.context.user) {
      data = options.context.user
    }

    return Promise.resolve(data)
  }
}

module.exports = auth
