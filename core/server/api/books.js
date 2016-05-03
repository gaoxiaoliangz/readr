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
    const requiredOptions = ['id']

    const doQuery = (options) => {
      return models.getData('books', {id: options.id}).then(function(result){
        if(result.length !== 0) {
          return Promise.resolve({
            html: result[0].book_content.html,
            id: options.id
          })
        }else{
          return Promise.reject(new errors.NotFoundError(i18n('errors.api.books.bookNotFound')))
        }
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

  getBookInfo(options) {
    const requiredOptions = ['id']

    const doQuery = (options) => {
      return models.getData('books', {id: options.id}).then(result => {
        if(result.length === 0) {
          return Promise.reject(new errors.NotFoundError(i18n('errors.api.books.bookNotFound')))
        }

        const book_info_id = result[0].book_info_id

        // check douban book data existence
        if(typeof book_info_id === 'undefined') {
          delete result[0]['book_content']

          return Promise.resolve(result[0])
        }else{
          return models.getData('book_info', {book_id: book_info_id}).then(result => {
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
      utils.validate(requiredOptions),
      doQuery
    ]

    return pipeline(tasks, options)
  },

  addBook(object, options) {
    let requiredOptions = ['bookContent', 'bookInfo']

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

      let bookInfo = JSON.parse(options.data.bookInfo)
      const bookInfoId = bookInfo.id

      // model putData will override id infoo
      bookInfo.book_id = bookInfoId
      delete bookInfo.id

      const bookData = {
        book_info_id: bookInfoId,
        book_content: {
          raw: raw,
          html: html
        }
      }

      return models.getData('book_info', { book_id: bookInfoId}).then(result => {
        if(result.length === 0) {
          return models.putData('book_info', bookInfo).then(result => {
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
      utils.validate(requiredOptions),
      utils.checkAdminPermissions,
      processDataAndDoQuery
    ]

    return pipeline(tasks, object, options)
  },

  getReadingProgress(options) {
    const requiredOptions = ['id']

    function doQuery(options) {
      return models.getData('reading_progress', {book_id: options.id}).then(result => {
        if(result.length === 0) {
          return {}
        } else {
          return Promise.resolve(result[0])
        }
      }, error => {
        return Promise.reject(error)
      })
    }

    const tasks = [
      utils.validate(requiredOptions),
      utils.checkUserPermissions,
      doQuery
    ]

    return pipeline(tasks, options)
  },

  updateReadingProgress(object, options) {
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

      return models.updateData('reading_progress', match, data, true).then(result => {
        return Promise.resolve(result)
      }, error => {
        return Promise.reject(error)
      })
    }

    const tasks = [
      utils.validate(requiredOptions),
      utils.checkUserPermissions,
      doQuery
    ]

    return pipeline(tasks, object, options)
  }
}

module.exports = books;
