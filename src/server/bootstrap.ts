const http: any = require('http')
import config from './config'
import print from './utils/print'

const port = config.port

export default function bootstrap(app, { env, serverRendering, hmr, serverRouting }) {
  let msg = `Server running in ${env} (${port})`

  if (hmr) {
    msg = msg + ' [HMR]'
  }
  if (serverRendering) {
    msg = msg + ' [server rendering]'
  }
  if (!serverRouting) {
    msg = msg + ' [hash routing]'
  }

  app.set('port', port)

  const server = http.createServer(app)
  server.listen(port)

  print.info(msg)
  if (hmr) {
    console.info('webpack building...')
  }

  return app
}
