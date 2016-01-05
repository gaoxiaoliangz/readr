var express = require('express');
var router = express.Router();

var home = require('./home'),
    signin = require('./signin'),
    signup = require('./signup');
    view = require('./view');
    books = require('./books');


router.use('/', home);
router.use('/signin', signin);
router.use('/signup', signup);
router.use('/view', view);
router.use('/books', books);

module.exports = router;
