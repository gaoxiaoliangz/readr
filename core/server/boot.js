var debug = require('debug')('rd:server')
var http = require('http')
var colors = require('colors/safe')
var port = 3000

function boot(app, env) {
  var server

  app.set('port', port);

  server = http.createServer(app)
  server.listen(port)

  server.on('error', onError)
  server.on('listening', function(){
    onListening(server)
  })

  console.log(colors.cyan(`> Server running in ${env} (${port})`))
}

// Event listener for HTTP server error event
function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges')
      process.exit(1)
      break
    case 'EADDRINUSE':
      console.error(bind + ' is already in use')
      process.exit(1)
      break
    default:
      throw error;
  }
}

// Event listener for HTTP server listening event
function onListening(server) {
  var addr = server.address()
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind)
}

module.exports = boot
