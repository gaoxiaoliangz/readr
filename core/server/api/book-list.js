'use strict'

const models = require('../models')
const Promise = require('bluebird')
const utils = require('./utils')
const _ = require('lodash')
const errors = require('../errors')
const i18n = require('../utils/i18n')
const pipeline = require('../utils/pipeline')

const bookList = {
  add(object, options) {
    let requiredOptions = ['books', 'description', 'name']

    const doQuery = (options) => {
      options.data.books = JSON.parse(options.data.books)

      let bookList = Object.assign({}, { creator_id: options.context.user.id }, options.data)

      return models.putData('book_list', bookList).then(result => {
        return Promise.resolve(result)
      }, error => {
        return Promise.reject(error)
      })
    }

    const tasks = [
      utils.validate(requiredOptions),
      utils.checkAdminPermissions,
      doQuery
    ]

    return pipeline(tasks, object, options)
  },

  browse(options) {

  },

  delete(options) {

  },

  edit(options) {

  },

  find(options) {

  },

  search(options) {

  }
}

module.exports = bookList
