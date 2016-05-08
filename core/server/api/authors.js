'use strict'

const models = require('../models')
const Promise = require('bluebird')
const utils = require('./utils')
const _ = require('lodash')
const errors = require('../errors')
const i18n = require('../utils/i18n')
const pipeline = require('../utils/pipeline')
const books = require('./books')
const humps = require('humps')

const authors = {
  // TODO: check existence
  add(object, options) {
    let requiredOptions = ['description', 'name', 'slug']

    const query = (options) => {
      let author = Object.assign({}, humps.decamelizeKeys(options.data))
      delete author.context

      return models.create('authors', author).then(result => {
        return Promise.resolve(result)
      }, error => {
        return Promise.reject(error)
      })
    }

    const tasks = [
      utils.validate(requiredOptions),
      utils.requireAdminPermissions,
      query
    ]

    return pipeline(tasks, object, options)
  },

  browse(options) {
    const requiredOptions = []
    const additionalOptions = ['q']

    const doQuery = (options) => {
      let query = options.q?options.q:null
      let reg
      let match = null

      if(query) {
        reg = new RegExp(options.q)
        match = {$or: [{slug: reg}, {name: reg}]}
      }

      return models.read('authors', match).then(result => {
        if(result.length === 0) {
          return Promise.reject(result)
        }

        return Promise.all(result.map(item => {
          return authors.find(Object.assign({}, options, {id: item.id}))
        }))
      }, error => {
        return Promise.reject(error)
      })
    }

    const tasks = [
      utils.validate(requiredOptions, additionalOptions),
      utils.requireUserPermissions,
      doQuery
    ]

    return pipeline(tasks, options)
  },

  delete(options) {

  },

  edit(options) {

  },

  find(options) {
    const requiredOptions = ['id']

    const doQuery = (options) => {
      return models.read('authors', {id: options.id}).then(result => {
        if(result.length === 0) {
          return Promise.reject(new errors.NotFoundError(i18n('errors.api.collections.notFound')))
        }
        delete result[0]._id
        return Promise.resolve(result[0])
      }, error => Promise.reject(error))
    }

    const tasks = [
      utils.validate(requiredOptions),
      doQuery
    ]

    return pipeline(tasks, options)
  },

  search(options) {

  }
}

module.exports = authors
