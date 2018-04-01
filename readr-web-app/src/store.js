import { createStore, applyMiddleware, compose } from 'redux'
// import { extractReducer, feedStore, extractSaga } from '@gxl/redux-model'
import { createEpicMiddleware } from 'redux-observable'
import createSagaMiddleware from 'redux-saga'
import thunk from 'redux-thunk'
// import appModel from './containers/appModel'
// import shelfModel from './containers/Shelf/shelfModel'
// import bookModel from './containers/Book/bookModel'
// import shelfEpic from './containers/Shelf/shelfEpic'
import rootReducer from './reducers'
import rootEpic from './epics'

// const rootEpic = combineEpics(shelfEpic)
const epicMiddleware = createEpicMiddleware(rootEpic)

// const models = [appModel, shelfModel, bookModel]
const sagaMiddleware = createSagaMiddleware()
const middlewares = [thunk, sagaMiddleware, epicMiddleware]
const enhancers = [
  applyMiddleware(...middlewares)
]

if (process.env.NODE_ENV !== 'production' && window.__REDUX_DEVTOOLS_EXTENSION__) {
  enhancers.push(window.__REDUX_DEVTOOLS_EXTENSION__(window.__REDUX_DEVTOOLS_EXTENSION__OPTIONS))
}

// const reducer = extractReducer(models)
// const saga = extractSaga(models)
const store = createStore(rootReducer, {}, compose(...enhancers))

// sagaMiddleware.run(saga)
// feedStore(store, models)

export default store 
