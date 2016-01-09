var express = require('express');
var router = express.Router();
var request = require('request');

var json = {
  title: 'readr',
}


var data = {
  title: 'readr',
  book_id: 1,
  book_progress: 0,
  cloud_progress: 0
}

router.get('/:book_id', function(req, res) {
  var book_id = req.params.book_id;
  data.book_id = book_id;

  res.render('book', data);
});



// request('http://localhost:4000/api/books', function (error, response, body) {
//   if (!error && response.statusCode == 200) {
//     body = JSON.parse(body);
//     json.data = body.data;
//   }
// });

router.get('/', function(req, res, next) {
  // console.log(json);
  res.render('book-list-react', json);
});

router.get('/new', function(req, res, next) {
  res.render('book-add', json);
});



module.exports = router;
