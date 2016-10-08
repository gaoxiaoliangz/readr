import rootSaga from '../../isomorphic/store/sagas'

/**
 * Get Redux store tree with initial fetched data
 */

function getStore(renderProps, fetchData, userSession, store) {
  if (fetchData === true) {
    const params = renderProps.params
    const query = renderProps.location.query

    const fetchDataFns = renderProps.components
      .map(comp => {
        return comp.fetchData || null
      })
      .filter(comp => Boolean(comp))

    store.runSaga(rootSaga)

    if (fetchDataFns.length !== 0) {
      return Promise.all(fetchDataFns.map(fetchDataFn => {
        // 这边应该是对 store 做了 mutation
        const result = fetchDataFn({ store, params, query, userSession })

        // todo
        // 遇到请求数组会报错
        if (Array.isArray(result)) {
          return Promise.all(result).then(() => {
            return 0
          }, error => error)
        }

        // todo
        // 结果不是 Promise, saga 的 action 暂时这么处理
        if (!result || !result.then) {
          return 0
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
