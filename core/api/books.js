var express = require('express');
var models = require('../models');
var Promise = require('bluebird');
var router = express.Router();

function _genSecret(len){
  return parseInt(Math.random()*Math.pow(10,len));
}

var books = {
  getAllBooks:function(){
    return new Promise(function(resolve){
      var data = {};
      var match = null;

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
  getBookContent: function(object) {
    var _id = parseInt(object._id);

    return new Promise(function(resolve){
      var match = {
        _id: _id
      };

      models.getData('books', match, 'book_content').then(function(result){
        resolve(result);
      });
    });
  },
  getBookInfo: function(object) {
    var _id = parseInt(object._id);

    return new Promise(function(resolve){
      var match = {
        _id: _id
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
    var data = {},
        html = "",
        raw_arr,
        raw = object.book_content;

    raw_arr = raw.split("\n");

    for(var i = 0; i < raw_arr.length; i++){
      html = html+"<p>" + raw_arr[i] + "</p>";
    }

    object.book_content = {
      raw: raw,
      html: html
    }
    return models.putData('books', object);
  },
  getReadingProgress: function(object) {
    return new Promise(function(resolve){
      var match = {
        book_id: object._id,
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
        book_id: options._id,
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
