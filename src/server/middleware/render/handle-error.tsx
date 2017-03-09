import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import Page500 from '../../../isomorphic/containers/Page500'

function handleError(error, req, res, next) {
  const html = renderToStaticMarkup(
    <Page500
      message={error.message || 'Unknown error occurred!'}
    />
  )

  res.send('<!DOCTYPE html>\n' + html)
}

export default handleError
