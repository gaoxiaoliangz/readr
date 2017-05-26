/**
 * # Pipeline Utility
 *
 * Based on pipeline.js from when.js:
 * https://github.com/cujojs/when/blob/3.7.4/pipeline.js
 */
import BPromise from 'bluebird'

const pipeline = (tasks, ...restArgs) => {
  let runTask = (task, args) => {
    // Self-optimizing function to run first task with multiple
    // args using apply, but subsequent tasks via direct invocation
    runTask = (_task, arg) => {
      return _task(arg)
    }

    return task.apply(null, args)
  }

  // Resolve any promises for the arguments passed in first
  return BPromise.all(restArgs).then((args) => {
    // Iterate through the tasks passing args from one into the next
    return BPromise.reduce(tasks, (arg, task) => {
      return runTask(task, arg)
    }, args)
  }) as any as Promise<any>
}

export default pipeline
