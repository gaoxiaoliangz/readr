module.exports = {
  path: '/book/:id',

  getComponent(nextState, fn) {
    require.ensure([], function (require) {
      fn(null, (require('./BookDetail') as any).default)
    })
  }
}
