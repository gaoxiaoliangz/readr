'use strict'
const Promise = require('bluebird')
const errors = require('../errors')
const models = require('../models')
const i18n = require('../utils/i18n')

const defaultConfig = {}

class ApiMethods {
  // config: {}
  constructor(schema, config) {
    if (typeof config === 'undefined') {
      config = {}
    }
    this.config = Object.assign({}, defaultConfig, config)
    this.schema = schema    
  }

  add(data) {
    return models.create(this.schema.table, data.object).then(result => {
      return Promise.resolve(result)
    }, error => {
      return Promise.reject(error)
    })
  }

  browse(data) {
    return models.read(this.schema.table, {}).then(result => {
      return Promise.resolve(result)
    })
  }

  find(data) {
    return models.read(this.schema.table, { id: data.options.id }).then(result => {
      if (result.length === 0) {
        return Promise.reject(new errors.NotFoundError(i18n('errors.api.general.notFound')))
      }

      return Promise.resolve(result)
    })
  }
}

module.exports = ApiMethods
