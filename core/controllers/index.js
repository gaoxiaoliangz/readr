var express = require('express');
var router = express.Router();

var home = require('./home'),
    signin = require('./signin'),
    signup = require('./signup');


router.use('/', home);
router.use('/signin', signin);
router.use('/signup', signup);

module.exports = router;
