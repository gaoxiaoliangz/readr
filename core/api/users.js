var express = require('express');
var router = express.Router();
var models = require('../models');
var Promise = require('bluebird');

models.init();


router.post('/', function(req, res) {
  var data = {};
  data.book_name = req.body.book_name;
  data.book_author = req.body.book_author;
  data.book_cover = req.body.book_cover;
  data.book_content = req.body.book_content;

  var result = models.put_data('books', data);

  result.then(function(val){
    if(val){
      console.log('books.js: success!');
      // res.send("new book added: "+data.book_name);
      res.redirect('/books/new');
    }else{
      console.log('books.js: error!');
      res.send("Error!");
    }
  });


