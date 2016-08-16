module.exports = {
  path: 'viewer/book/:bookId',

  getComponent(nextState, fn) {
    require.ensure([], function (require) {
      fn(null, (require('./Viewer') as any).default)
    })
  }
}
