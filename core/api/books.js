var express = require('express');
var router = express.Router();
var models = require('../models');
var Promise = require('bluebird');

models.init();

router.get('/:book_id/content', function(req, res, next) {
  var book_id = req.params.book_id;
  var result = models.get_data('books', book_id, 'book_content');

  result.then(function(val){
    var text = val;
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

    res.send(data_str);
  })
});

// testing only
router.get('/test', function(req, res, next) {

  // res.send("abc");

  var data = {
    abc: 789,
  };

  var result = models.test('books', data);
  result.then(function(val){

    console.log(val[0]);
    res.send(val[0]);
  });
});



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












  // var mongodb = require('mongodb');
  // var MongoClient = mongodb.MongoClient;
  // var url = 'mongodb://localhost:27017/readr';

  // MongoClient.connect(url, function (err, db) {
  //   if (err) {
  //     console.log('Unable to connect to the mongoDB server. Error:', err);
  //   } else {
  //     console.log('Connection established to', url);

  //     var collection = db.collection('books');
  //     var user = {book_id: book_id, book_name: book_name, book_author: book_author, book_content: book_content, book_cover: book_cover};

  //     collection.insert([user], function (err, result) {
  //       if (err) {
  //         console.log(err);
  //       } else {
  //         console.log('Done. ');
  //       }
  //       db.close();
  //     });
  //   }
  // });

  
});






module.exports = router;
