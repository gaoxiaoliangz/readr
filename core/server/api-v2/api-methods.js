'use strict'
// const Promise = require('bluebird')
// const errors = require('../errors')
// const i18n = require('../utils/i18n')
const Model = require('./model')

const defaultConfig = {}

class ApiMethods {
  // config: {}
  constructor(schema, config) {    
    this.config = Object.assign(
      {},
      defaultConfig,
      (typeof config === 'undefined' ? {} : config)
    )
    this.schema = schema
    this.model = new Model(schema)
  }

  add(data) {
    return this.model.insert(data.object)
  }

  browse(data) {
    return this.model.listRaw()
  }

  edit(data) {
    return this.model.update(data.object)
  }

  delete(data) {
    return this.model.findById(data.options.id).delete()
  }

  find(data) {
    return this.model.findById(data.options.id).listRaw()
  }
}

module.exports = ApiMethods
