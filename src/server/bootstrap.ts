const http: any = require('http')
const runtimeOptions: any = require('./utils/runtime-options')
const config: any = require('./config')
const port = config.port
const env = runtimeOptions.env
import print from './utils/print'

function bootstrap(app) {
  let msg = `Server running in ${env} (${port})`

  if (runtimeOptions.hmr) {
    msg = msg + ' [HMR]'
  }
  if (runtimeOptions.serverRendering) {
    msg = msg + ' [server rendering]'
  }
  if (!runtimeOptions.serverRouting) {
    msg = msg + ' [hash routing]'
  }

  app.set('port', port)

  const server = http.createServer(app)
  server.listen(port)

  print.info(msg)

  return app
}

module.exports = bootstrap
