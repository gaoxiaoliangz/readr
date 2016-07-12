const restConfig = require('./rest-config')
const api = require('./index')

function makeEndpoint(config) {
  console.log(config)
  
  return {
    url: config.url,
    fn: api[config.api].browse
  }
}

const endpoints = [makeEndpoint(restConfig.authors)]

module.exports = endpoints
