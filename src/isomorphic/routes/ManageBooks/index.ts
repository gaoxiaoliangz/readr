module.exports = {
  getComponent(nextState, fn) {
    require.ensure([], function (require) {
      fn(null, (require('./ManageBooks') as any).default)
    })
  }
}
