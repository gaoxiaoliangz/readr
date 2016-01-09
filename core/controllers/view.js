var express = require('express');
var router = express.Router();




// todo: remove this
router.get('/get_progress/:book_id/:progress', function(req, res, next) {
  res.send("0");
});

router.get('/set_progress/:book_id/:progress', function(req, res, next) {
});

module.exports = router;
