const Api = require('./index')


function createEndpoints(api) {
  return api._publicMethods.map(mtd => {
    return {
      url: mtd.url,
      fn: api[mtd.name],
      httpMethod: mtd.httpMethod
    }
  })
}

const endpoints = createEndpoints(Api.authors)

module.exports = endpoints
