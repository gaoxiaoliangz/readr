'use strict'

const models = require('../models')
const Promise = require('bluebird')
const utils = require('./utils')
const _ = require('lodash')
const errors = require('../errors')
const i18n = require('../utils/i18n')
const pipeline = require('../utils/pipeline')
const books = require('./books')

const collections = {
  add(object, options) {
    let requiredOptions = ['items', 'description', 'name']

    const doQuery = (options) => {
      // 暂时没加 item 的验证，如果不存在，browse 的时候不会输出
      options.data.items = JSON.parse(options.data.items)

      let collection = Object.assign({}, { creator_id: options.context.user.id }, options.data)
      // TODO
      collection.type = 'book'

      return models.create('collections', collection).then(result => {
        return Promise.resolve(result)
      }, error => {
        return Promise.reject(error)
      })
    }

    const tasks = [
      utils.validate(requiredOptions),
      utils.requireAdminPermissions,
      doQuery
    ]

    return pipeline(tasks, object, options)
  },

  browse(options) {
    const requiredOptions = []

    const doQuery = (options) => {
      return models.read('collections', null).then(result => {
        if(result.length === 0) {
          return Promise.resolve(result)
        }

        return Promise.all(result.map(item => {
          return collections.find(Object.assign({}, options, {id: item.id}))
        }))
      }, error => {
        return Promise.reject(error)
      })
    }

    const tasks = [
      utils.validate(requiredOptions),
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
      return models.read('collections', {id: options.id}).then(result => {
        if(result.length === 0) {
          return Promise.reject(new errors.NotFoundError(i18n('errors.api.collections.notFound')))
        }

        let collection = result[0]

        return Promise.all(result[0].items.map(id => {
            options = Object.assign({}, options, {id: id})
            if(result[0].type === 'book') {
              return books.find(options).then(result => result, error => Promise.resolve(null))
            } else {
              return Promise.reject(new Error('undefined type'))
            }
          }))
          .then(result => {
            result = result.filter(item => {
              if(item !== null) {
                return true
              }
            })
            collection.items = result
            delete collection._id
            return Promise.resolve(collection)
          }, error => {
            return Promise.reject(error)
          })
      }, error => {
        return Promise.reject(error)
      })
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

module.exports = collections
