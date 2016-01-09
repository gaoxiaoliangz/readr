var express      = require('express'),
    frontend     = require('../controllers'),
    api          = require('../api'),

    apiRoutes;

apiRoutes = function apiRoutes() {
  var router = express.Router();

  router.get('/books', frontend.getAllBooks);

  return router;
};

module.exports = apiRoutes;
