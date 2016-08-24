/**
 * Get Redux store tree with initial fetched data
 */

import configureStore from '../../isomorphic/store/configureStore'
const store = configureStore()

function getStore(renderProps) {
  // const query = renderProps.location.query
  const params = renderProps.params
  const wrappedComponent = renderProps.components.slice(-1)[0].WrappedComponent
    ? renderProps.components.slice(-1)[0].WrappedComponent
    : null

  if (wrappedComponent && wrappedComponent.fetchData) {
    // 这边应该是对 store 做了 mutation
    const result = wrappedComponent.fetchData({ store, params })

    if (Array.isArray(result)) {
      return Promise.all(result).then(() => {
        return store
      }, error => error)
    }
    return result.then(res => {
      return store
    }, error => error)
  }

  return Promise.resolve(store)
}

export default getStore
