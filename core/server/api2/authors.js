'use strict'

const models = require('../models')
const Promise = require('bluebird')
// const utils = require('./utils')
// const _ = require('lodash')
const errors = require('../errors')
const i18n = require('../utils/i18n')
const pipeline = require('../utils/pipeline')
// const books = require('./books')
// const humps = require('humps')
const Validation = require('../data/validation')

const authors = {
  add(data) {
    return Promise.resolve({ data })
  },

  browse(options) {

  },

  delete(options) {

  },

  edit(options) {

  },

  find(options) {
    // todo
    // delete options.context

    const schema = {
      id: Validation.validator.id,
      context: [Validation.mark.optional, Validation.validator.any],
    }

    const doQuery = (options2) => {
      return models.read('authors', { id: options2.id }).then(result => {
        if (result.length === 0) {
          return Promise.reject(new errors.NotFoundError(i18n('errors.api.collections.notFound')))
        }
        delete result[0]._id
        return Promise.resolve(result[0])
      }, error => Promise.reject(error))
    }

    const tasks = [
      // utils.validate(requiredOptions),
      Validation.exec2(schema),
      doQuery,
    ]

    return pipeline(tasks, options)
  },

  search(options) {

  },
}

module.exports = authors
