/**
 * args
 * -f=folderName
 */

const rimraf = require('rimraf') // eslint-disable-line
const minimist = require('minimist')

const argv = minimist(process.argv.slice(2))
const targets = argv.f.split(',')

targets.forEach(target => {
  rimraf(target, () => {
    console.info(`Removed ${target}`)
  })
})
