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
    function doQuery(options) {
      console.log(options);
      // return Promise.resolve('doQuery result!')
      return 'doQuery result!'
    }

    let tasks = [
      checkAdminPermissions,
      doQuery
    ]

    let result = pipeline(tasks, options)
    // return pipeline(tasks, options)
    console.log(result);
    return result
    // return pipeline(tasks, options).then(result => {
    //   return {
    //     data: {
    //       result: result
    //     }
    //   }
    // }, error => {
    //   return Promise.reject(error)
    // })
  },

  getAllBooks() {
    return models.getData('books', null).then(result => {
      return Promise.all(result.map(item => {
        return books.getBookInfo({id: item.id})
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
          return Promise.resolve(result[0])
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
          return Promise.reject(new errors.NotFoundError('book not found'))
        }

        const douban_book_id = result[0].douban_book_id

        // check douban book data existence
        if(typeof douban_book_id === 'undefined') {
          delete result[0]['book_content']

          return Promise.resolve(result[0])
        }else{
          return models.getData('douban_books', {book_id: douban_book_id}).then(result => {
            if(result.length === 0) {
              return Promise.reject(new errors.NotFoundError('douban book info not found'))
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
          // TODO
          return Promise.reject(new Error('book exists'))
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

  getReadingProgress(object, options) {
    return new Promise(function(resolve){
      if(options.context.user) {
        var match = {
          book_id: object.book_id,
          user_id: options.context.user
        }

        models.getData('reading_progress',match).then(function(result){
          if(result.error) {
            resolve({
              data: {
                message: 'This book haven\'t been read yet!'
              }
            })
          }else{
            resolve({
              data: result.data[0]
            })
          }
        })
      } else {
        resolve({
          error: {
            message: 'You have to login to do this!'
          },
          statusCode: 403
        })
      }
    })
  },

  updateReadingProgress(object, options) {
    return new Promise(function(resolve){
      if(options.context.user) {
        var match = {
          book_id: options.book_id,
          user_id: options.context.user
        }
        console.log(options);

        var data = {
          book_id: options.book_id,
          user_id: options.context.user,
          percentage: object.percentage,
          page: object.page,
          page_sum: object.page_sum
        }

        models.updateData('reading_progress', match, data).then(function(result){
          resolve(result)
        })
      } else {
        resolve({
          error: {
            message: 'You have to login to do this!'
          },
          statusCode: 403
        })
      }
    })
  }
}

module.exports = books;
