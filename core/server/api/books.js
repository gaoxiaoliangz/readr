'use strict'

const models = require('../models')
const Promise = require('bluebird')
const utils = require('./utils')
const _ = require('lodash')
const errors = require('../errors')
const i18n = require('../utils/i18n')
const pipeline = require('../utils/pipeline')
const data = require('../utils/data')
const humps = require('humps')
const authors = require('./authors')

const books = {
  add(object, options) {
    let requiredOptions = ['content', 'title', 'author', 'description', 'cover']
    let additionalOptions = ['tags', 'category', 'dbId']

    const processDataAndDoQuery = (options) => {
      const raw = options.data.content
      const html = data.parseTextToHtml(raw)


      let book = Object.assign({}, humps.decamelizeKeys(options.data))
      book.content = {
        raw: raw,
        html: html
      }
      book.author = JSON.parse(options.data.author)

      return models.create('books', book).then(result => {
        return Promise.resolve(result)
      }, error => {
        return Promise.reject(error)
      })
    }

    const tasks = [
      utils.validate(requiredOptions),
      utils.requireAdminPermissions,
      processDataAndDoQuery
    ]

    return pipeline(tasks, object, options)
  },

  /**
   * @param options includes query #flow: user | newest, #q
   */
  browse(options) {
    const requiredOptions = []
    const additionalOptions = ['flow', 'q']
    let filter = options.filter?options.filter:'newest'

    const doQuery = (options) => {
      let flow = options.flow?options.flow:'newest'
      let query = options.q?options.q:null

      const search = (options) => {
        const reg = new RegExp(options.q)

        return models.read('books', {$or: [{title: reg}, {author: reg}]}).then(result => {
          return Promise.all(result.map(item => {
            return books.find(Object.assign({}, options, {id: item.id}))
          }))
        }, error => {
          return Promise.reject(error)
        })
      }

      const getUserFlow = (options) => {
        utils.requireUserPermissions(options)

        return models.read('reading_progress', { user_id: options.context.user.id}).then(result => {
          if(result.length === 0) {
            return Promise.resolve(result)
          }

          return Promise.all(result.map(item => {
            return books.find(Object.assign({}, options, {id: item.book_id})).then(result => {
              return Promise.resolve(result)
            }, error => {
              // 失效的书籍直接从查询结果里移除
              return Promise.resolve(null)
            })
          })).then(result => {
            return result.filter(item => {
              if(item !== null) {
                return true
              }
            })
          })
        }, error => {
          return Promise.reject(error)
        })
      }

      const getNewest = (options) => {
        return models.read('books', null).then(result => {
          return Promise.all(result.map(item => {
            return books.find(Object.assign({}, options, {id: item.id}))
          }))
        }, error => {
          return Promise.reject(error)
        })
      }

      if(query) {
        return search(options)
      }

      if(flow === 'user') {
        return getUserFlow(options)
      } else {
        return getNewest(options)
      }
    }

    let tasks = [
      utils.validate(requiredOptions, additionalOptions)
    ]

    tasks.push(doQuery)

    return pipeline(tasks, options)
  },

  delete(options) {
    const requiredOptions = ['id']

    function doQuery(options) {
      return models.deleteData('books', {id: options.id}).then(result => {
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

    return pipeline(tasks, options)
  },

  find(options) {
    const requiredOptions = ['id']
    const additionalOptions = ['fields']
    const defaultFields = ['id', 'title', 'author', 'description', 'cover', 'date_created']

    const query = (options) => {
      return models.read('books', {id: options.id}).then(result => {
        if(result.length === 0) {
          return Promise.reject(new errors.NotFoundError(i18n('errors.api.books.bookNotFound')))
        }
        let book = result[0]
        let fields = defaultFields

        if(options.fields) {
          fields = defaultFields.concat(options.fields.split(','))
        }

        return Promise.all(result[0].author.map(id => {
          return authors.find(Object.assign({}, options, {id}))
        })).then(result => {
          book = Object.assign({}, book, {author: result})
          book = _.pick(book, fields)
          if(book.content) {
            delete book.content.raw
          }
          return Promise.resolve(book)
        }, error => Promise.reject(error))
      }, error => {
        return Promise.reject(error)
      })
    }

    const tasks = [
      utils.validate(requiredOptions, additionalOptions),
      query
    ]

    return pipeline(tasks, options)
  },

  getProgress(options) {
    const requiredOptions = ['id']

    function doQuery(options) {
      return models.read('reading_progress', {book_id: options.id}).then(result => {
        if(result.length === 0) {
          return {}
        } else {
          delete result[0]._id
          return Promise.resolve(result[0])
        }
      }, error => {
        return Promise.reject(error)
      })
    }

    const tasks = [
      utils.validate(requiredOptions),
      utils.requireUserPermissions,
      doQuery
    ]

    return pipeline(tasks, options)
  },

  setProgress(object, options) {
    const requiredOptions = ['id', 'percentage', 'pageNo', 'pageSum']

    function doQuery(options) {
      const match = {
        book_id: options.id,
        user_id: options.context.user.id
      }

      const data = {
        book_id: options.id,
        user_id: options.context.user.id,
        page_no: options.data.pageNo,
        page_sum: options.data.pageSum,
        percentage: options.data.percentage
      }

      return models.update('reading_progress', match, data, true).then(result => {
        return Promise.resolve(result)
      }, error => {
        return Promise.reject(error)
      })
    }

    const tasks = [
      utils.validate(requiredOptions),
      utils.requireUserPermissions,
      doQuery
    ]

    return pipeline(tasks, object, options)
  }
}

module.exports = books
