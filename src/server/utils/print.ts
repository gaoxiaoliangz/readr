const colors = require('colors/safe')

const print = {
  info(message) {
    console.info('\n' + colors.bgGreen.bold.white(' INFO '), colors.green(message))
  },

  test(message) {
    console.info('\n' + colors.bgCyan.bold.black(' INFO '), typeof message !== 'object' ? colors.cyan(message) : message)
  },

  warn(message) {
    console.error('\n' + colors.bgYellow.bold.black(' WARNING '), typeof message !== 'object' ? colors.yellow(message) : message)
  },

  error(message) {
    console.error('\n' + colors.bgRed.bold.white(' ERROR '), typeof message !== 'object' ? colors.red(message) : message)
  }
}

export default print
