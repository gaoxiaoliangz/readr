require('app-module-path').addPath('./assets/built/server')
const path = require('path')
const init = require('./core/server/init')

module.exports = init(path.join(__dirname))
