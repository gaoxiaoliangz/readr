import http from 'http'
import print from './utils/print'

export default function bootstrap(app) {
  const server = http.createServer(app)
  const port = Number(process.env.PORT)
  const isProduction = process.env.NODE_ENV === 'production'

  app.set('port', port)
  server.listen(port)

  print.info(`Server running in ${isProduction ? 'production' : 'development'} at port ${port}`)

  return app
}
