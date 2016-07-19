const path = require('path')
const init = require('./src/server/init')

module.exports = init(path.join(__dirname))
