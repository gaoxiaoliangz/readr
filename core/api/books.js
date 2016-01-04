var express = require('express');
var app = express();
var router = express.Router();
var models = require('../models');
var path = require("path");
var Promise = require('bluebird');

models.init();

router.get('/:book_id/content', function(req, res, next) {
  var book_id = req.params.book_id;
  var result = models.get_book_content(book_id);

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

module.exports = router;
