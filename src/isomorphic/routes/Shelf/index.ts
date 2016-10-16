module.exports = {
  getComponent(nextState, fn) {
    require.ensure([], function (require) {
      fn(null, (require('./Shelf') as any).default)
    })
  }
}
