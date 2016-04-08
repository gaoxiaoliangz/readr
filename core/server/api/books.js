var express = require('express'),
    models = require('../models'),
    Promise = require('bluebird'),
    mongodb = require('mongodb'),
    router = express.Router();

var books = {
  getAllBooks:function(){
    return new Promise(function(resolve){
      var data = {};
      var match = null;

      models.getData('books', match).then(function(result){
        if(result.error){
          console.log('> api/books.js')
          console.log(result)
          resolve(result)
        }else{
          data = result

          for(var i = 0;i < result.data.length;i++){
            delete result.data[i]['book_content']
          }
          resolve(data)
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
        resolve(result);
      });
    });
  },
  getBookInfo: function(object) {
    return new Promise(function(resolve){
      var match = {
        id: object.id
      };

      models.getData('books', match).then(function(result){
        if(result.error){
          data = result;
          console.log(data);
          resolve(data);
        }else{
          data = result;

          for(var i = 0;i < result.data.length;i++){
            delete result.data[i]['book_content'];
          }
          resolve(data);
        }
      });
    });
  },
  addBook: function(object){
    return new Promise(resolve => {
      var data
      var html
      var raw = object.bookContent
      var paragraphs = raw.split("\n")
      var doubanBook = JSON.parse(object.doubanBook)
      var douban_book_id = doubanBook.id

      // model putData will override id infoo
      doubanBook.book_id = douban_book_id

      for(var i = 0; i < paragraphs.length; i++){
        html = html+"<p>" + paragraphs[i] + "</p>"
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
          if(res.error.code === 404) {
            models.putData('douban_books', doubanBook).then(res => {
              if(res.data) {
                resolve(models.putData('books', data))
              }else{
                resolve(res.error)
              }
            })
          }else{
            resolve(res.error)
          }
        }else{
          resolve({
            error: {
              msg: 'Book exsits!',
              code: '400'
            }
          })
        }
      })
    })
  },
  getReadingProgress: function(object) {
    return new Promise(function(resolve){
      var match = {
        book_id: object.id,
        user_id: object.context.user
      };

      models.getData('progress',match).then(function(result){
        resolve(result);
      });
    });
  },
  updateReadingProgress: function(object, options) {
    console.log(options);
    return new Promise(function(resolve){

      var match = {
        book_id: options.id,
        user_id: options.context.user
      };
      var data = {
        book_id: options._id,
        user_id: options.context.user,
        reading_progress: object.reading_progress
      };

      models.updateData('progress',match, data).then(function(result){
        resolve(result);
      });
    });
  }
}

module.exports = books;
