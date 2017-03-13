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

  store.runSaga(rootSaga).done.then(next)

  renderToString(rootComponent)
  store.close()
}

export default fetchData
