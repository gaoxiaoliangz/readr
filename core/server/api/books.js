'use strict'

const models = require('../models')
const Promise = require('bluebird')
const mongodb = require('mongodb')
// const pipeline = require('../utils/pipeline')
const utils = require('../utils')
const _ = require('lodash')
const errors = require('../errors')
// const i18n = require('../utils/i18n')


function handleAdminPermissions(options) {
  let role = options.context.user?options.context.user.role:'visitor'

  if(role === 'admin') {
    return options
  } else {
    return Promise.reject(new Error('Access denied!'))
  }
}

const books = {

  deleteBook(options) {
    function doQuery(options) {
      console.log(options);
      // return Promise.resolve('doQuery result!')
      return 'doQuery result!'
    }

    let tasks = [
      handleAdminPermissions,
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

  getAllBooks(){
    // return new Promise(function(resolve){

    var match = null
    var promisedbookList = []

    return models.getData('books', match).then(result => {
        // if(result.error){
        //   resolve(result)
        // }else{
        console.log(result.length);

        promisedbookList = result.map(item => {
          return books.getBookInfo({id: item.id})
        })

        // Promise.all(promisedbookList).then(result => {
        //   return Promise.resolve(result.map(item => item.data))
        // })

        return Promise.resolve(promisedbookList)
        // }
      }, error => {
        return Promise.reject(error)
      })
    // })
  },

  getBookContent(options) {
    const permittedOptions = ['id']

    const doQuery = (options) => {
      return models.getData('books', {id: options.id}).then(function(result){
        if(result.length !== 0) {
          return Promise.resolve(result[0])
        }else{
          return Promise.reject(new errors.NotFoundError(utils.i18n('errors.api.books.bookNotFound')))
        }
      }, error => {
        return Promise.reject(error)
      })
    }

    const tasks = [
      utils.validate(permittedOptions),
      doQuery
    ]

    return utils.pipeline(tasks, options)
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

    return utils.pipeline(tasks, options)
  },

  addBook(object, options){
    return new Promise(resolve => {
      let role = options.context.user?options.context.user.role:'visitor'

      if(role === 'admin') {
        var data = {}
        var html = ''
        var raw = object.bookContent
        var paragraphs = raw.split("\n")
        var doubanBook = JSON.parse(object.doubanBook)
        var douban_book_id = doubanBook.id

        // model putData will override id infoo
        doubanBook.book_id = douban_book_id

        for(var i = 0; i < paragraphs.length; i++){
          html += '<p>' + paragraphs[i] + '</p>'
        }

        data = {
          douban_book_id: douban_book_id,
          book_content: {
            raw: raw,
            html: html
          }
        }

        // check douban book existence
        models.getData('douban_books', { book_id: douban_book_id}).then(res => {
          if(res.error) {
            if(res.statusCode === 404) {
              models.putData('douban_books', doubanBook).then(res => {
                if(res.data) {
                  resolve(models.putData('books', data))
                }else{
                  resolve(res.error)
                }
              })
            }else{
              resolve(res)
            }
          }else{
            resolve({
              error: {
                message: 'Book exsits!'
              },
              statusCode: 400
            })
          }
        })
      }else{
        resolve({
          error: {
            message: 'Permission denied!'
          },
          statusCode: 403
        })
      }
    })
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
