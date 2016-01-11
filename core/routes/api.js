var express      = require('express'),
    api          = require('../api'),

    apiRoutes;

apiRoutes = function apiRoutes() {
  var router = express.Router();

  router.get('/books', api.http(api.books.getAllBooks));
  router.get('/books/:_id/content', api.http(api.books.getBookContent));

  return router;
};

module.exports = apiRoutes;
