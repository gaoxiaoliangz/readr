import config from './config'
import print from './utils/print'
const http = require('http')

const port = config.port

export default function bootstrap(app, { production, render, hot, route }) {
  let features = []

  if (hot) {
    features.push('hot')
  }

  if (render) {
    features.push('server rendering')
  } else if (route) {
    features.push('server routing')
  } else {
    features.push('hash routing')
  }

  app.set('port', port)

  const server = http.createServer(app)
  server.listen(port)

  features = features.map(feature => `[${feature}]`).join(' ') as any

  print.info(`Server running in ${production ? 'production' : 'development'} (${port}) ${features}`)

  if (hot) {
    console.info('webpack building...')
  }

  return app
}
