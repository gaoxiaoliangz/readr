/**
 * Get Redux store tree with initial fetched data
 */

// import configureStore from '../../isomorphic/store/configureStore'

// const store = configureStore()

function getStore(renderProps, fetchData, userSession, store) {
  if (fetchData === true) {
    const params = renderProps.params
    const query = renderProps.location.query

    const fetchDataFns = renderProps.components
      .map(comp => {
        return comp.fetchData || null
      })
      .filter(comp => Boolean(comp))

    if (fetchDataFns.length !== 0) {
      return Promise.all(fetchDataFns.map(fetchDataFn => {
        // 这边应该是对 store 做了 mutation
        const result = fetchDataFn({ store, params, query, userSession })

        if (Array.isArray(result)) {
          return Promise.all(result).then(() => {
            return 0
          }, error => error)
        }
        return result.then(() => {
          return 0
        }, error => error)
      })).then(() => {
        return store
      }, error => error)
    }

    return Promise.resolve(store)
  }

  return Promise.resolve(store)
}

export default getStore
