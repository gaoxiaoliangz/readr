import React from 'react'
import { renderToString } from 'react-dom/server'
import ServerSideAppRoot from '../../../components/ServerSideAppRoot'
import rootSaga from '../../../sagas'
import * as actions from '../../../actions'

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
  store.dispatch(actions.session.success(req.context.user))

  renderToString(rootComponent)
  store.close()
}

export default fetchData
