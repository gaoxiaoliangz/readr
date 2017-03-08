/**
 * args
 * --serve=serviceName, (serviceName: assets, api, pages)
 * -p, --production
 * --port=portNum
 */
const minimist = require('minimist')
const initialize = require('../build/bin/initialize').default

const argv = minimist(process.argv.slice(2))
const serviceName = argv.serve
const isProduction = argv.p || argv.production
const basePath = process.cwd()

if (isProduction) {
  process.env.NODE_ENV = 'production'
} else {
  process.env.NODE_ENV = 'development'
}

initialize({ basePath, isProduction, serviceName })
