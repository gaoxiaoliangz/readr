/**
 * args
 * targetName (node, static, dll)
 * -w, --watch
 */
const webpack = require('webpack') // eslint-disable-line
const chalk = require('chalk') // eslint-disable-line
const minimist = require('minimist')
const moment = require('moment')
const checkRequiredFiles = require('react-dev-utils/checkRequiredFiles') // eslint-disable-line
const path = require('path')
const fs = require('fs')
const _ = require('lodash')
const paths = require('../config/paths')

// order matters, node requires manifest file created when building static
const defaultBuildTargets = ['static', 'node', 'dll']
const argv = minimist(process.argv.slice(2))
const isWatching = argv.w || argv.watch

function getFilesizeInBytes(filename) {
  const stats = fs.statSync(filename)
  const fileSizeInBytes = stats.size
  return fileSizeInBytes
}

// Print out errors
function printErrors(summary, errors) {
  console.info(chalk.red(summary))
  console.info()
  errors.forEach(err => {
    console.info(err.message || err)
    console.info()
  })
}

function getWebpackConfig(target) {
  const absolutePath = path.join(paths.config, `webpack.config.${target}.js`)
  const doesExist = checkRequiredFiles([absolutePath])

  if (doesExist) {
    return require(absolutePath) // eslint-disable-line
  }

  process.exit(0)
  return null
}

const BABEL_ENV = {
  node: 'node',
  static: 'production',
  dll: 'development'
}

function build(target, cb) {
  process.env.BABEL_ENV = BABEL_ENV[target]

  let startCompilingTime = new Date().valueOf()
  const compiler = webpack(getWebpackConfig(target))

  const handleCompilerCb = () => (err, stats) => {
    const endTime = new Date().valueOf()
    const totalTime = ((endTime - startCompilingTime) / 1000).toFixed(2)
    const currentTime = moment().format('hh:mm:ss')

    if (err) {
      printErrors(`${currentTime} Failed to compile [err]`, [err])
      if (!isWatching) {
        process.exit(1)
      }
    }

    if (stats.compilation.errors.length) {
      printErrors(`${currentTime} Failed to compile [stats.compilation.errors]`, stats.compilation.errors)
      if (!isWatching) {
        process.exit(1)
      }
    }

    if (process.env.CI && stats.compilation.warnings.length) {
      printErrors(`${currentTime} Failed to compile. When process.env.CI = true, warnings are treated as failures. Most CI servers set this automatically.`, stats.compilation.warnings)
      if (!isWatching) {
        process.exit(1)
      }
    }

    if (!err && !stats.compilation.errors.length && !(process.env.CI && stats.compilation.warnings.length)) {
      console.info(chalk.green(`${currentTime} Compiled ${target} successfully, took ${totalTime}s`))
      console.info()
      // print built file size info
      if (!isWatching) {
        // todo: beautify report
        console.info(`File report`)
        _.forEach(stats.compilation.assets, (val, key) => {
          const fileSizeInKB = (getFilesizeInBytes(val.existsAt) / 1000).toFixed(1)
          console.info(`${key}: ${fileSizeInKB}KB`)
        })
      }

      if (cb) {
        cb()
      }
    }
  }

  if (isWatching) {
    console.info(`Watching ${target} changes...`)
  } else {
    console.info(`Creating ${target} build...`)
  }

  if (isWatching) {
    compiler.watch({
      aggregateTimeout: 300,
      poll: false
    }, handleCompilerCb())

    compiler.plugin('invalid', () => {
      startCompilingTime = new Date().valueOf()
      console.info(`Compiling ${target}...`)
    })
  } else {
    compiler.run(handleCompilerCb())
  }

  return true
}

function runTasks(handler, tasks, taskIndex = 0) {
  if (taskIndex === 0 && tasks.length !== 1) {
    console.info(`🚀 Starting ${tasks.length} tasks(${tasks.join(', ')})...`)
    console.info()
  }
  if (taskIndex <= tasks.length - 1) {
    handler.call(null, tasks[taskIndex], () => {
      runTasks(handler, tasks, taskIndex + 1)
    })
  } else if (tasks.length !== 1) {
    console.info(chalk.green('🎉 Tasks complete!'))
  }
}

function handleBuild(targets) {
  const targetsToBuild = targets.length === 0 ? defaultBuildTargets : targets

  if (!isWatching) {
    runTasks(build, targetsToBuild)
  } else {
    targetsToBuild.forEach(t => {
      build(t)
    })
  }
}

// todo: untested
// function copyPublicFolder() {
//   fs.copySync(paths.appPublic, paths.appBuild, {
//     dereference: true,
//     filter: file => file !== paths.appHtml
//   });
// }

handleBuild(argv._)
