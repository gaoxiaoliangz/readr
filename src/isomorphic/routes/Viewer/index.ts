module.exports = {
  path: 'viewer/book/:id',

  getComponent(nextState, fn) {
    require.ensure([], function (require) {
      fn(null, (require('./Viewer') as any).default)
    })
  }
}
