var express = require('express');
var router = express.Router();

var books = require('./books');
    var users = require('./users');


router.use('/books', books);
router.use('/users', users);


module.exports = router;