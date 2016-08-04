module.exports = {
  path: 'users',

  getComponent(nextState, fn) {
    require.ensure([], function (require) {
      fn(null, (require('./ManageUsers') as any).default)
    })
  }
}
