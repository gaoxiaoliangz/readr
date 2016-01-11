var express      = require('express'),
    api          = require('../api'),

    apiRoutes;

apiRoutes = function apiRoutes() {
  var router = express.Router();

  function mw1(req, res, next){
    console.log("im middleware one");
    next();
  }
  function mw2(req, res, next){
    console.log("im middleware two");
    next();
  }
  var comments = [
    {"author": "Pete Hunt", "text": "This is one comment"},
    {"author": "Jordan Walke", "text": "This is *another* comment"},
    {"author": "Tom Walke", "text": "This is *another* comment"},
    {"author": "Jordan Walke", "text": "This is *another* comment"}
  ];

  router.get('/comments', function(req, res) {
    res.send(comments);
  });

  router.get('/books', [mw1, mw2], api.http(api.books.getAllBooks));
  router.get('/books/:_id/content', api.http(api.books.getBookContent));

  return router;
};

module.exports = apiRoutes;
