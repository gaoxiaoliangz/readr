module.exports = {
  getComponent(nextState, fn) {
    require.ensure([], function (require) {
      fn(null, (require('./TestPlace') as any).default)
    })
  }
}
