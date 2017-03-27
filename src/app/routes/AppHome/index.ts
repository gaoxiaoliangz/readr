

// const Bundle = ({ onLoaded, path, onFail, isServerEnv }) => {

// }



module.exports = {
  getComponent(nextState, fn) {
    // require.ensure([], function (require) {
    //   fn(null, (require('./AppHome') as any).default)
    // })
    _import<any>('./AppHome').then(component => {
      console.log(component);
      
      fn(null, component.default)
    })
  }
}
