/**
 * --taskName=string
 */
import checkRequiredFiles from 'react-dev-utils/checkRequiredFiles'
import minimist from 'minimist'
import path from 'path'

const argv = minimist(process.argv.slice(2))
const format = (time) => {
  return time.toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, '$1')
}
const taskName = argv.taskName || ''

const run = (fn, options) => {
  const task = typeof fn.default === 'undefined' ? fn : fn.default
  const start = new Date()
  const taskNameStr = taskName ? (' ' + taskName) : ''
  const taskInfoStr = `'${task.name}${options ? `(${JSON.stringify(options)})` : ''}'`

  console.info(
    `[${format(start)}${taskNameStr}] Running ${taskInfoStr}...`,
  )
  return task(options)
    .then((resolution) => {
      const end = new Date()
      const time = end.getTime() - start.getTime()
      console.info(
        `[${format(end)}${taskNameStr}] Finished ${taskInfoStr} after ${time} ms`,
      )
      return resolution
    })
    .catch((err) => {
      const end = new Date()
      console.info(`[${format(end)}${taskNameStr}] Error ${taskInfoStr}: ${err.message}`)
    })
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
