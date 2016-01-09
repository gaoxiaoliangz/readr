var express = require('express'),
    api = require('../api'),
    frontendRoutes;

frontendRoutes = function frontendRoutes() {
  var router = express.Router();

  // router.get('/posts', authenticatePublic, api.http(api.posts.browse));

};

module.exports = frontendRoutes;
