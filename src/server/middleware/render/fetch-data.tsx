import React from 'react'
import { renderToString } from 'react-dom/server'
import AppProvider from '../../../app/containers/AppProvider'
import rootSaga from '../../../app/sagas'

function fetchData(req, res, next) {
  const { matchedResults: { renderProps } } = req.locals
  const store = req.locals.store

  const rootComponent = (
    <AppProvider
      renderPageContent
      renderProps={renderProps}
      store={req.locals.store}
    />
  )

  // if child components not rendered in the initial renderToString
  // componentWillMount hook will not be triggered
  // which may cause problems
  // so I have to run saga twice
  store.runSaga(rootSaga).done.then(() => {
    store.runSaga(rootSaga).done.then(next)
    renderToString(rootComponent)
    store.close()
  })

  renderToString(rootComponent)
  store.close()
}

export default fetchData
