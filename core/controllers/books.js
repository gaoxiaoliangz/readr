var express = require('express');
var router = express.Router();
var request = require('request');

var json = {
  title: 'readr',
}

request('http://localhost:4000/api/books', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    body = JSON.parse(body);
    json.data = body.data;
  }
});

router.get('/', function(req, res, next) {
  console.log(json);
  res.render('book-list', json);
});

router.get('/new', function(req, res, next) {
  res.render('book-add', json);
});



module.exports = router;
