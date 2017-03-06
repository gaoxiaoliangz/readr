/**
 * args
 * --serve=serviceName, (serviceName: assets, api, pages)
 * -p, --production
 * --port=portNum
 */
import minimist from 'minimist'
import initialize from './initialize'

const argv = minimist(process.argv.slice(2))
const serviceName = argv.serve
const isProduction = argv.p || argv.production
const basePath = process.cwd()

if (isProduction) {
  process.env.NODE_ENV = 'production'
} else {
  process.env.NODE_ENV = 'development'
}

const app = initialize({ basePath, isProduction, serviceName })

export default app
