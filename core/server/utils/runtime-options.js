const hmr = process.argv.indexOf('--hmr') !== -1 ? true : false
const serverRouting = process.argv.indexOf('--noServerRouting') !== -1 ? false : true
const serverRendering = process.argv.indexOf('--noServerRendering') !== -1 ? false : true
const webpackDevServer = process.argv.indexOf('--webpackDevServer') !== -1 ? true : false
const env = process.argv.indexOf('--production') !== -1 ? 'production' : 'development'
const express = require('express')
const app = express()
const appEnv = app.get('env')

if(env === 'production' || appEnv === 'production') {
  env = 'production'
}

const runtimeOptions = {
  hmr: hmr,
  serverRouting: serverRouting,
  serverRendering: serverRendering,
  webpackDevServer: webpackDevServer,
  env: env
}

module.exports = runtimeOptions