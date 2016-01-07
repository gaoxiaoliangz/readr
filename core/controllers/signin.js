var express = require('express');
var router = express.Router();
var session = require('express-session');


var data = {
  title: 'readr'
}

router.get('/', function(req, res, next) {
  res.render('signin', data);
});

module.exports = router;
