import configureStore from 'store/configureStore'

function createStore() {
  let store

  if(typeof window.__INITIAL_STATE__ !== 'undefined') {
    let initialState = JSON.parse(decodeURIComponent(window.__INITIAL_STATE__))
    store = configureStore(initialState)
  }else{
    store = configureStore()
  }

  return store
}

export default createStore
