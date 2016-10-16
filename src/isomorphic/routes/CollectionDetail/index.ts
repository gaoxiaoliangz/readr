module.exports = {
  getComponent(nextState, fn) {
    require.ensure([], function (require) {
      fn(null, (require('./CollectionDetail') as any).default)
    })
  }
}
