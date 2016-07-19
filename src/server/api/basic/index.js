const config = require('./config')
const _ = require('lodash')
const generateBasicApi = require('../utils/generate-basic-api')

const basicApi = _.mapValues(config, (val, key) => {
  return generateBasicApi(config[key])
})

module.exports = basicApi
