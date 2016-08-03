module.exports = {
  path: 'browse',

  getComponent(nextState, fn) {
    require.ensure([], function (require) {
      fn(null, (require('./Browse') as any).default)
    })
  }
}
