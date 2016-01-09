var express = require('express');
var router = express.Router();

var books = require('./books');
    var users = require('./users');


var comments = [
  {"author": "Pete Hunt", "text": "This is one comment"},
  {"author": "Jordan Walke", "text": "This is *another* comment"},
  {"author": "Tom Walke", "text": "This is *another* comment"},
  {"author": "Jordan Walke", "text": "This is *another* comment"}
];


router.get('/comments', function(req, res, next) {
  res.send(comments);
});


router.use('/books', books);
router.use('/users', users);


module.exports = router;