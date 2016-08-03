module.exports = {
  path: 'collections',

  getComponent(nextState, fn) {
    require.ensure([], function (require) {
      fn(null, (require('./Collections') as any).default)
    })
  }
}
