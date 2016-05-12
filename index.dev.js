require('app-module-path').addPath('./core/frontend')

var path = require('path')
var init = require('./core/server')
var app = init(path.join(__dirname))

module.exports = app
