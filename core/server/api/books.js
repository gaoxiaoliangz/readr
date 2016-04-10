var express = require('express')
var models = require('../models')
var Promise = require('bluebird')
var mongodb = require('mongodb')
var router = express.Router()

var books = {
  getAllBooks:function(){
    return new Promise(function(resolve){
      var match = null
      var promisedbookList = []

      models.getData('books', match).then(function(result){
        if(result.error){
          console.log('> api/books.js')
          console.log(result)

          resolve(result)
        }else{
          promisedbookList = result.data.map(item => {
            return books.getBookInfo({id: item.id})
          })

          Promise.all(promisedbookList).then(result => {
            resolve({
              data: result.map(item => item.data)
            })
          })
        }
      })
    })
  },

  getBookContent: function(object) {
    return new Promise(function(resolve){
      var match = {
        id: object.id
      }

      models.getData('books', match, 'book_content').then(function(result){
        resolve({
          data: result.data[0]
        })
      })
    })
  },

  getBookInfo: function(object) {
    return new Promise(function(resolve){
      var match = {
        id: object.id
      }
      var douban_book_id

      models.getData('books', match).then(function(result){
        if(result.error){
          console.log(result)

          resolve(result)
        }else{
          // douban book data exists
          douban_book_id = result.data[0].douban_book_id

          if(typeof douban_book_id === 'undefined') {
            delete result.data[0]['book_content']

            resolve({
              data: result.data[0]
            })
          }else{
            models.getData('douban_books', {book_id: douban_book_id}).then(function(result){
              delete result.data[0]._id
              result.data[0].id = object.id
              resolve({
                data: result.data[0]
              })
            })
          }
        }
      })
    })
  },

  addBook: function(object){
    return new Promise(resolve => {
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
    })
  },

  getReadingProgress: function(object, options) {
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

  updateReadingProgress: function(object, options) {
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
