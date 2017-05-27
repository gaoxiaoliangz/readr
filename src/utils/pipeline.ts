/**
 * # Pipeline Utility
 *
 * Based on pipeline.js from when.js:
 * https://github.com/cujojs/when/blob/3.7.4/pipeline.js
 */
import BPromise from 'bluebird'

// use curried args
const pipeline = (...restArgs) => (tasks: any[]) => {
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

export const withTimeCount = (name: string) => (tasks: any[]) => {
  const startCount = (data) => {
    if (process.env.NODE_ENV !== 'production') {
      console.time(name)
    }
    return data
  }

  const endCount = (data) => {
    if (process.env.NODE_ENV !== 'production') {
      console.timeEnd(name)
    }
    return data
  }

  if (tasks.length >= 2) {
    return [tasks[0], startCount, ...tasks.slice(1), endCount]
  }

  return tasks
}

export default pipeline
