var express = require('express');
var router = express.Router();
var models = require('../models');
var Promise = require('bluebird');

models.init();

router.get('/', function(req, res, next) {
  var data = {};
  var match = null;
  var result = models.getData('books', match);

  result.then(function(val){
    if(val.status == "ERROR"){
      console.log(val.error);
      res.send(val.error);
    }else{
      data = val;

      for(var i = 0;i < val.data.length;i++){
        delete val.data[i]['book_content'];
      }

      res.send(data);
    }
  });
});


router.get('/:book_id/content', function(req, res, next) {
  var book_id = parseInt(req.params.book_id);
  var match = {
    _id: book_id
  };
  var result = models.getData('books', match, 'book_content');

  result.then(function(val){
    if(val.status == "ERROR"){
      console.log(val.error);
      res.send(val.error);
    }else{
      var text = val.body[0];
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
    }
  });
});





router.post('/', function(req, res) {
  var data = {};
  data.book_name = req.body.book_name;
  data.book_author = req.body.book_author;
  data.book_cover = req.body.book_cover;
  data.book_content = req.body.book_content;

  var result = models.putData('books', data);

  result.then(function(val){
    if(val){
      res.redirect('/books/new');
    }else{
      console.log(val.error);
      res.send(val.error);
    }
  });







  // testing only
  router.get('/test', function(req, res, next) {

    var data = {
      abc: 789,
    };

    var result = models.test('books', data);
    result.then(function(val){

      console.log(val[0]);
      res.send(val[0]);
    });
  });
  
});






module.exports = router;
