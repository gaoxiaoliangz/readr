var express = require('express');
var app = express();
var router = express.Router();


var data = {
	title: 'readr'
}


router.get('/', function(req, res, next) {
  res.render('signup', data);
});


module.exports = router;
