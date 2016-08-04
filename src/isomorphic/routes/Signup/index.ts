module.exports = {
  path: 'signup',

  getComponent(nextState, fn) {
    require.ensure([], function (require) {
      fn(null, (require('./Signup') as any).default)
    })
  }
}