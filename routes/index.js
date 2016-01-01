var express = require('express');
var router = express.Router();

var data = {
	title: 'readr'
}


router.get('/', function(req, res, next) {
  res.render('index', data);
});


module.exports = router;
