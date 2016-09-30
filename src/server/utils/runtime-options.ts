import express from 'express'
const hmr = process.argv.indexOf('--hmr') !== -1
const serverRouting = process.argv.indexOf('--noServerRouting') === -1
const serverRendering = process.argv.indexOf('--noServerRendering') === -1
const webpackDevServer = process.argv.indexOf('--webpackDevServer') !== -1

const app = express()
const appEnv = app.get('env')
let env = process.argv.indexOf('--production') !== -1 ? 'production' : 'development'

if (env === 'production' || appEnv === 'production') {
  env = 'production'
}

const options = {
  hmr,
  serverRouting,
  serverRendering,
  webpackDevServer,
  env,
}

export default options
