module.exports = {
  path: 'books/new',

  getComponent(nextState, fn) {
    require.ensure([], function (require) {
      fn(null, (require('./AddBook') as any).default)
    })
  }
}
