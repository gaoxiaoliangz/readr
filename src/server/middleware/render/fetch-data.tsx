import React from 'react'
import { renderToString } from 'react-dom/server'
import ServerSideAppRoot from '../../../components/ServerSideAppRoot'
import rootSaga from '../../../sagas'

function fetchData(req, res, next) {
  const { matchedResults: { renderProps } } = req.locals
  const store = req.locals.store

  const rootComponent = (
    <ServerSideAppRoot
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
