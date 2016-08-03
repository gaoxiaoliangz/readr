module.exports = {
  path: 'profile',

  getComponent(nextState, fn) {
    require.ensure([], function (require) {
      fn(null, (require('./Profile') as any).default)
    })
  }
}
