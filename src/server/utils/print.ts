const colors: any = require('colors/safe')

const print = {
  info(message) {
    console.info(colors.bgGreen.bold.black(' INFO '), colors.green(message))
  },

  test(message) {
    console.info(colors.bgCyan.bold.black(' INFO '), typeof message !== 'object' ? colors.cyan(message) : message)
  },

  warn(message) {
    console.error(colors.bgYellow.bold.black(' WARNING '), typeof message !== 'object' ? colors.yellow(message) : message)
  },

  error(message) {
    console.error(colors.bgRed.bold.white(' ERROR '), typeof message !== 'object' ? colors.red(message) : message)
  }
}

export default print
