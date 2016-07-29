const colors: any = require('colors/safe')

const print = {
  info(message) {
    console.info(colors.bgGreen.bold.black(' INFO '), colors.green(message))
  },

  test(message) {
    console.info(colors.bgCyan.bold.black(' INFO '), colors.cyan(message))
    console.info(colors.cyan(`  from ${__filename}`))
  },

  warn(message) {
    console.error(colors.bgYellow.bold.black(' WARNING '), colors.yellow(message))
    console.error(colors.yellow(`  at ${__filename}`))
  },

  error(message) {
    console.error(colors.bgRed.bold.white(' ERROR '), colors.red(message))
    console.error(colors.red(`  at ${__filename}`))
  }
}

export default print
