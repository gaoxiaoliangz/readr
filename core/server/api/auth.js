'use strict'
const models = require('../models')
const Promise = require('bluebird')

const auth = {
  checkStatus(options) {
    let data = { authed: false}

    if(options.context.user) {
      data.authed = true
      data.user = options.context.user
    }

    return Promise.resolve(data)
  }
}

module.exports = auth
