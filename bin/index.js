/**
 * args
 * --serve=serviceName, (serviceName: assets, api, pages)
 * -p, --production
 * --port=portNum
 */
require('dotenv').config()

const minimist = require('minimist') // eslint-disable-line
const argv = minimist(process.argv.slice(2))
const isProduction = argv.p || argv.production || process.env.NODE_ENV === 'production'

process.env.NODE_ENV = isProduction ? 'production' : 'development'

const initialize = require('../build/node').default

const basePath = process.cwd()
const serviceName = argv.serve

initialize({ basePath, isProduction, serviceName })
