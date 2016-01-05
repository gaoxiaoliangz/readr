var express = require('express');
var router = express.Router();

var data = {
  title: 'readr'
}

router.get('/new', function(req, res, next) {
  res.render('addbook', data);
});

module.exports = router;
