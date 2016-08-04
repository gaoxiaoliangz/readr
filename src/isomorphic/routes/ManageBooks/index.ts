module.exports = {
  path: 'books',

  getComponent(nextState, fn) {
    require.ensure([], function (require) {
      fn(null, (require('./ManageBooks') as any).default)
    })
  }
}
