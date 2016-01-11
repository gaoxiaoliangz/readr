var express = require('express');
var models = require('../models');
var Promise = require('bluebird');
var router = express.Router();


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
        if(result.error){
          console.log(result);
          resolve(result);
        }else{
          var text = result.data[0];
          var data = {};
          var text2 = '';
          var status = 1;
          var text_arr = text.split("\n");

          for(var i = 0; i < text_arr.length; i++){
            text2 = "<p>" + text_arr[text_arr.length-i-1] + "</p>" + text2;
          }

          data.text = text;
          data.text2 = text2;
          data.status = status;
          data_str = JSON.stringify(data);

          resolve(data_str);
        }
      });
    });
  },
  addBook: function(object){
    return models.putData('books', object);
  },


  testApi: function(object, options){
    var abc;
    return new Promise(function(resolve){
      abc = object;
      resolve(abc);
    });
  }
}

module.exports = books;
