/**
 * args read from command line
 * --targets=tar1,tar2
 */

const rimraf = require('rimraf') // eslint-disable-line
const minimist = require('minimist')

const argv = minimist(process.argv.slice(2))
const targets = argv.targets.split(',')

function clean() {
  return Promise
    .all(targets.map((target) => {
      return new Promise((resolve) => {
        rimraf(target, () => {
          resolve(target)
        })
      })
    }))
    .then((_targets) => {
      console.info(`Removed ${_targets.join(', ')}`)
    })
}

export default clean
