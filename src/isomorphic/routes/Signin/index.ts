module.exports = {
  getComponent(nextState, fn) {
    require.ensure([], function (require) {
      fn(null, (require('./Signin') as any).default)
    })
  }
}