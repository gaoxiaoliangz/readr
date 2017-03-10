import React from 'react'
import { renderToString } from 'react-dom/server'
import ServerSideAppRoot from '../../../components/ServerSideAppRoot'
import rootSaga from '../../../sagas'

function fetchData(req, res, next) {
  const { matchedResults: { renderProps } } = req.locals
  const store = req.locals.store

  const fetchDataFns = renderProps.components
    .map(comp => {
      return (comp && comp.fetchData) || null
    })
    .filter(comp => Boolean(comp))

  if (fetchDataFns.length === 0) {
    const rootComponent = (
      <ServerSideAppRoot
        renderPageContent
        renderProps={renderProps}
        store={req.locals.store}
      />
    )

    store.runSaga(rootSaga).done
      .then(() => {
        next()
      })

    renderToString(rootComponent)
    store.close()
  } else {
    next()
  }
}

export default fetchData
