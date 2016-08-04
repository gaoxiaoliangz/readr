module.exports = {
  path: 'collections/new',

  getComponent(nextState, fn) {
    require.ensure([], function (require) {
      fn(null, (require('./AddCollection') as any).default)
    })
  }
}
