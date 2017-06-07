/**
 * args read from command line
 * --name=string
 */
import checkRequiredFiles from 'react-dev-utils/checkRequiredFiles'
import minimist from 'minimist'
import path from 'path'
import chalk from 'chalk'
import paths from './paths'
import Observable from './Observable'

require('dotenv').config()
require('dotenv-safe').load({
  sample: paths.resolveApp('.env-sample')
})

const argv = minimist(process.argv.slice(2))
const format = (time) => {
  return time.toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, '$1')
}
const taskName = argv.name || ''

function run(fn, options) {
  let start
  const task = typeof fn.default === 'undefined' ? fn : fn.default
  const taskNameStr = taskName ? (' ' + taskName) : ''
  const taskInfoStr = `'${task.name}${options ? `(${JSON.stringify(options)})` : ''}'`
  const result = task(options)

  const printStartInfo = () => {
    start = new Date()
    console.info(
      `${chalk.white.bgBlack(` ${format(start)}${taskNameStr}> `.toUpperCase())} Running ${taskInfoStr}...`,
    )
  }

  const printEndInfo = () => {
    const end = new Date()
    const time = ((end.getTime() - start.getTime()) / 1000).toFixed(2)
    console.info(
      `${chalk.white.bgBlack(` ${format(end)}${taskNameStr}> `.toUpperCase())} Finished ${taskInfoStr} after ${time}s`,
    )
  }

  const handleError = (err) => {
    const end = new Date()
    console.info(`[${format(end)}${taskNameStr}] Error ${taskInfoStr}: ${err.message}`)
  }

  printStartInfo()

  if (Object.prototype.isPrototypeOf.call(Observable.prototype, result)) {
    return Promise.resolve(
      result
        .subscribe((state) => {
          switch (state) {
            case 'invalid':
              printStartInfo()
              break

            case 'done':
              printEndInfo()
              break

            default:
              console.error('Invalid state!')
              break
          }
        })
        .catch(handleError)
    )
  }

  return result
    .then(printEndInfo)
    .catch(handleError)
}

if (require.main === module && process.argv.length > 2) {
  delete require.cache[__filename]
  const taskFile = `./tasks/${process.argv[2]}.js`

  if (!checkRequiredFiles([path.resolve(__dirname, taskFile)])) {
    process.exit(1)
  }

  // eslint-disable-next-line global-require, import/no-dynamic-require
  const module = require(taskFile).default

  run(module).catch((err) => {
    console.error(err.stack)
    process.exit(1)
  })
}

export default run
