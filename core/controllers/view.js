var express = require('express');
var router = express.Router();

var data = {
  title: 'readr',
  book_id: 1,
  book_progress: 0,
  cloud_progress: 0
}

router.get('/books/:book_id', function(req, res) {
  var book_id = req.params.book_id;
  data.book_id = book_id;

  res.render('view', data);
});


// todo: remove this
router.get('/get_progress/:book_id/:progress', function(req, res, next) {
  res.send("0");
});

router.get('/set_progress/:book_id/:progress', function(req, res, next) {
});

module.exports = router;
