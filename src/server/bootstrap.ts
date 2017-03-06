import http from 'http'
import appConfig from '../app.config'
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

  switch (serviceName) {
    case 'api':
      portInConfigFile = appConfig.apiPort
      break

    case 'pages':
      portInConfigFile = appConfig.pagesPort
      break

    default:
      throw new Error('Port undefined!')
  }

  const port = overidePort || portInConfigFile

  app.set('port', port)
  server.listen(port)

  print.info(`Service[${serviceName}] running in ${isProduction ? 'production' : 'development'} at port ${port}`)

  return app
}
