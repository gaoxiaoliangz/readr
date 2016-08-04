module.exports = {
  path: '*',

  getComponent(nextState, fn) {
    require.ensure([], function (require) {
      fn(null, (require('./NoMatch') as any).default)
    })
  }
}