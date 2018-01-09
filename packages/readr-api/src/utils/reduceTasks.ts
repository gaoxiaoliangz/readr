import Promise from 'bluebird'

// tasks 可以是返回 Promise 的 fn
// 也可以是 Promise
export default function reduceTasks(tasks: (any)[]) {
  return Promise.reduce(tasks, (result, task) => {
    if (typeof task === 'function') {
      return task.call(this)
    }
    // 如果 task 是 Promise blue bird 貌似会自动把 promise resolve 出来，是 reject 直接就终止执行
    // 所以 写 task()#then 会出错
    return task
  })
}
