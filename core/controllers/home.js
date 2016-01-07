var express = require('express');
var router = express.Router();

var app = express();
var parseurl = require('parseurl');


var data = {
  title: 'readr'
};

router.get('/', function(req, res, next) {
  data.user = req.session.userId;
  res.render('index', data);
});

module.exports = router;

