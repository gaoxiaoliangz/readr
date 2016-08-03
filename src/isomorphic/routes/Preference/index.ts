module.exports = {
  path: 'preference',

  getComponent(nextState, fn) {
    require.ensure([], function (require) {
      fn(null, (require('./Preference') as any).default)
    })
  }
}
