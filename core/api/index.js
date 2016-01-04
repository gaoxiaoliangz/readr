var express = require('express');
var router = express.Router();

var books = require('./books');
    // signin = require('./signin'),
    // signup = require('./signup');


router.use('/books', books);
// router.use('/signin', signin);
// router.use('/signup', signup);

module.exports = router;