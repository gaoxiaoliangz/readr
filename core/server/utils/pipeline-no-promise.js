function pipeline(tasks, ...args) {
  let runTask = (task, args2) => {
    // Self-optimizing function to run first task with multiple
    // args using apply, but subsequent tasks via direct invocation
    runTask = (task2, arg) => {
      return task2(arg)
    }

    return task.apply(null, args2)
  }

  // Resolve any promises for the arguments passed in first
  return Promise.all(args).then(function (args) {
    // Iterate through the tasks passing args from one into the next
    return Promise.reduce(tasks, function (arg, task) {
      return runTask(task, arg)
    }, args)
  })
}

module.exports = pipeline
