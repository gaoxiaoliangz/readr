import http from 'http'
import print from './utils/print'

interface BootstrapConfig {
  port?: number
  isProduction: boolean
}

export default function bootstrap(app, config: BootstrapConfig) {
  const { port: overidePort, isProduction } = config
  const server = http.createServer(app)
  const port = overidePort || Number(process.env.PORT)

  app.set('port', port)
  server.listen(port)

  print.info(`Server running in ${isProduction ? 'production' : 'development'} at port ${port}`)

  return app
}
