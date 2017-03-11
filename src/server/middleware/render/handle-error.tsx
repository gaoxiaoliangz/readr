import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import Page500 from '../../../components/Page500'
import { DOCTYPE } from '../../../components/AppDoc'

function handleError(error, req, res, next) {
  const html = renderToStaticMarkup(
    <Page500
      message={error.message || 'Unknown error occurred!'}
    />
  )

  res.send(DOCTYPE + html)
}

export default handleError
