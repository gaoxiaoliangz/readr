/**
 * args
 * --taskName=string
 * --watchTask
 */
import checkRequiredFiles from 'react-dev-utils/checkRequiredFiles'
import minimist from 'minimist'
import path from 'path'

const argv = minimist(process.argv.slice(2))
const format = (time) => {
  return time.toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, '$1')
}
const taskName = argv.taskName || ''
const isWatching = argv.watchTask

// const iterate = (iterable, callback) => {
//   const next = iterable.next()

//   if (next.done) {
//     return Promise.resolve()
//   }
//   return next.value
//     .then((val) => {
//       callback(val)
//       return iterate(iterable, callback)
//     })
// }

const run = (fn, options) => {
  const task = typeof fn.default === 'undefined' ? fn : fn.default
  const start = new Date()
  const taskNameStr = taskName ? (' ' + taskName) : ''
  const taskInfoStr = `'${task.name}${options ? `(${JSON.stringify(options)})` : ''}'`

  const processResult = (resolution) => {
    const end = new Date()
    const time = end.getTime() - start.getTime()
    console.info(
      `[${format(end)}${taskNameStr}] Finished ${taskInfoStr} after ${time} ms`,
    )
    return resolution
  }

  console.info(
    `[${format(start)}${taskNameStr}] Running ${taskInfoStr}...`,
  )

  if (isWatching) {
    // let previousValue
    // let next
    // const iterable = task(options)
    // while (true) { // eslint-disable-line
    //   previousValue = next && next.value
    //   next = iterable.next()
    //   if (next.done) {
    //     return previousValue
    //   } else { // eslint-disable-line
    //     console.log('wtf', next.value)
    //   }
    // }

    // return iterate(task(options), (val) => {
    //   console.log('handle', val)
    // })
    //   .catch((err) => {
    //     const end = new Date()
    //     console.info(`[${format(end)}${taskNameStr}] Error ${taskInfoStr}: ${err.message}`)
    //   })

    return task(options).subscribe(data => {
      console.log('subed', data)
    })
  } else {
    return task(options)
      .then(processResult)
      .catch((err) => {
        const end = new Date()
        console.info(`[${format(end)}${taskNameStr}] Error ${taskInfoStr}: ${err.message}`)
      })
  }
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
