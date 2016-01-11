var express = require('express');
var models = require('../models');
var Promise = require('bluebird');
var router = express.Router();


var books = {
  getAllBooks:function(){
    return new Promise(function(resolve){
      var data = {};
      var match = null;
      var result = models.getData('books', match);

      result.then(function(val){
        if(val.error){
          data = val;
          console.log(data);
          resolve(data);
        }else{
          data = val;

          for(var i = 0;i < val.data.length;i++){
            delete val.data[i]['book_content'];
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

      models.getData('books', match, 'book_content').then(function(val){
        if(val.error){
          console.log(val);
          resolve(val);
        }else{
          var text = val.data[0];
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
