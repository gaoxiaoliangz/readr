import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import Page500 from '../../../components/Page500'
import { DOCTYPE } from '../../../components/AppDoc'

function handleError(error, req, res, next) {
  const html = renderToStaticMarkup(
    <Page500
      error={error}
    />
  )

  res.send(DOCTYPE + html)
}

export default handleError
