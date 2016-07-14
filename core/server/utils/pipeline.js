/**
 * # Pipeline Utility (borrowed from Ghost)
 *
 * Based on pipeline.js from when.js:
 * https://github.com/cujojs/when/blob/3.7.4/pipeline.js
 */
'use strict'
const Promise = require('bluebird')

function pipeline(tasks /* initial arguments */) {
  const args = Array.prototype.slice.call(arguments, 1)

  let runTask = (task, args) => {
    // Self-optimizing function to run first task with multiple
    // args using apply, but subsequent tasks via direct invocation
    runTask = (task, arg) => {
      return task(arg)
    }

    return task.apply(null, args)
  }

  // Resolve any promises for the arguments passed in first
  return Promise.all(args).then(args => {
    // Iterate through the tasks passing args from one into the next
    return Promise.reduce(tasks, (arg, task) => {
      return runTask(task, arg)
    }, args)
  })
}

module.exports = pipeline
