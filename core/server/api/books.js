'use strict'

const models = require('../models')
const Promise = require('bluebird')
const mongodb = require('mongodb')
const utils = require('./utils')
const _ = require('lodash')
const errors = require('../errors')
const i18n = require('../utils/i18n')
const pipeline = require('../utils/pipeline')


const books = {
  deleteBook(options) {
    const permittedOptions = ['id']

    function doQuery(options) {
      return models.deleteData('books', {id: options.id}).then(result => {
        return Promise.resolve(result)
      }, error => {
        return Promise.reject(error)
      })
    }

    const tasks = [
      utils.validate(permittedOptions),
      utils.checkAdminPermissions,
      doQuery
    ]

    return pipeline(tasks, options)
  },

  getAllBooks(options) {
    return models.getData('books', null).then(result => {
      return Promise.all(result.map(item => {
        let infoOptions = Object.assign({}, options, {id: item.id})
        return books.getBookInfo(infoOptions)
      }))
    }, error => {
      return Promise.reject(error)
    })
  },

  getBookContent(options) {
    const permittedOptions = ['id']

    const doQuery = (options) => {
      return models.getData('books', {id: options.id}).then(function(result){
        if(result.length !== 0) {
          return Promise.resolve({html: result[0].book_content.html})
        }else{
          return Promise.reject(new errors.NotFoundError(i18n('errors.api.books.bookNotFound')))
        }
      }, error => {
        return Promise.reject(error)
      })
    }

    const tasks = [
      utils.validate(permittedOptions),
      doQuery
    ]

    return pipeline(tasks, options)
  },

  getBookInfo(options) {
    const permittedOptions = ['id']

    const doQuery = (options) => {
      return models.getData('books', {id: options.id}).then(result => {
        if(result.length === 0) {
          return Promise.reject(new errors.NotFoundError(i18n('errors.api.books.bookNotFound')))
        }

        const douban_book_id = result[0].douban_book_id

        // check douban book data existence
        if(typeof douban_book_id === 'undefined') {
          delete result[0]['book_content']

          return Promise.resolve(result[0])
        }else{
          return models.getData('douban_books', {book_id: douban_book_id}).then(result => {
            if(result.length === 0) {
              return Promise.reject(new errors.NotFoundError(i18n('errors.api.books.doubanInfoNotFound')))
            }
            delete result[0]._id
            result[0].id = options.id

            return Promise.resolve(result[0])
          }, error => {
            return Promise.reject(error)
          })
        }
      }, error => {
        return Promise.reject(error)
      })
    }

    const tasks = [
      utils.validate(permittedOptions),
      doQuery
    ]

    return pipeline(tasks, options)
  },

  addBook(object, options) {
    let permittedOptions = []

    function parseTextToHtml(str) {
      let html = ''
      let paragraphs = str.split("\n")

      for(let i = 0; i < paragraphs.length; i++){
        html += '<p>' + paragraphs[i] + '</p>'
      }

      return html
    }

    function processDataAndDoQuery(options) {
      const raw = options.data.bookContent
      const html = parseTextToHtml(raw)

      let doubanBook = JSON.parse(options.data.doubanBook)
      const doubanBookId = doubanBook.id

      // model putData will override id infoo
      doubanBook.book_id = doubanBookId
      delete doubanBook.id

      const bookData = {
        douban_book_id: doubanBookId,
        book_content: {
          raw: raw,
          html: html
        }
      }

      return models.getData('douban_books', { book_id: doubanBookId}).then(result => {
        if(result.length === 0) {
          return models.putData('douban_books', doubanBook).then(result => {
            return models.putData('books', bookData).then(result => {
              return Promise.resolve(result)
            }, error => {
              return Promise.reject(error)
            })
          }, error => {
            return Promise.reject(error)
          })
        }else{
          return Promise.reject(new errors.ValidationError(i18n('errors.api.books.bookExists')))
        }
      }, error => {
        return Promise.reject(error)
      })
    }

    const tasks = [
      utils.validate(permittedOptions),
      utils.checkAdminPermissions,
      processDataAndDoQuery
    ]

    return pipeline(tasks, object, options)
  },

  getReadingProgress(options) {
    const permittedOptions = ['id']

    function doQuery(options) {
      return models.getData('reading_progress', {book_id: options.id}).then(result => {
        if(result.length === 0) {
          return Promise.reject(new errors.NotFoundError(i18n('errors.notFound')))
        } else {
          return Promise.resolve(result[0])
        }
      }, error => {
        return Promise.reject(error)
      })
    }

    const tasks = [
      utils.validate(permittedOptions),
      utils.checkUserPermissions,
      doQuery
    ]

    return pipeline(tasks, options)
  },

  updateReadingProgress(object, options) {
    const permittedOptions = ['id']

    function doQuery(options) {
      const match = {
        book_id: options.id,
        user_id: options.context.user.id
      }

      const data = {
        book_id: options.id,
        user_id: options.context.user.id,
        percentage: object.percentage,
        page: object.page,
        page_sum: object.pageSum
      }

      return models.updateData('reading_progress', match, data, true).then(result => {
        return Promise.resolve(result)
      }, error => {
        return Promise.reject(error)
      })
    }

    const tasks = [
      utils.validate(permittedOptions),
      utils.checkUserPermissions,
      doQuery
    ]

    return pipeline(tasks, object, options)
  }
}

module.exports = books;
