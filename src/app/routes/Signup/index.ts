module.exports = {
  getComponent(nextState, fn) {
    require.ensure([], function (require) {
      fn(null, (require('./Signup') as any).default)
    })
  }
}
