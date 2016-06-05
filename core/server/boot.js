'use strict'

const debug = require('debug')('rd:server')
const http = require('http')
const colors = require('colors/safe')
const runtimeOptions = require('./utils/runtime-options')
const config = require('./config')
const port = config.port
const isHmrEnabled = runtimeOptions.hmr

function boot(app) {
  let msg = `> Server running in ${env} (${port})`
  
  if(runtimeOptions.hmr) {
    msg = msg + ' [HMR]'
  }
  if(runtimeOptions.serverRendering) {
    msg = msg + ' [server rendering]'
  }
  if(!runtimeOptions.serverRouting) {
    msg = msg + ' [hash routing]'
  }

  app.set('port', port)

  let server = http.createServer(app)
  server.listen(port)
  
  // color the msg
  msg = colors.cyan(msg)

  console.log(msg)
  
  return app
}

module.exports = boot
