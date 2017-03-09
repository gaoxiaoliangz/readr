import http from 'http'
// import appConfig from '../app.config'
import print from './utils/print'

interface BootstrapConfig {
  port?: number
  serviceName: 'api' | 'pages'
  isProduction: boolean
}

export default function bootstrap(app, config: BootstrapConfig) {
  let portInConfigFile
  const { port: overidePort, serviceName, isProduction } = config
  const server = http.createServer(app)
  const serviceName2 = serviceName || 'pages'

  switch (serviceName2) {
    case 'api':
      portInConfigFile = process.env.API_PORT
      break

    case 'pages':
      portInConfigFile = process.env.SERVER_PORT
      break

    default:
      throw new Error('serviceName undefined!')
  }

  const port = overidePort || portInConfigFile

  app.set('port', port)
  server.listen(port)

  print.info(`Service[${serviceName2}] running in ${isProduction ? 'production' : 'development'} at port ${port}`)

  return app
}
