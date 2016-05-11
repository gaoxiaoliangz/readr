import configureStore from 'store/configureStore'

function createStore() {
  let store

  if(typeof window.__INITIAL_STATE__ !== 'undefined') {
    store = configureStore(window.__INITIAL_STATE__)
  }else{
    store = configureStore()
  }

  return store
}

export default createStore
