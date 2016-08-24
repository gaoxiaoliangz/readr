import { renderHtml } from '../render-react-components'
import routesWithEnsure from '../../isomorphic/routes'
import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import print from '../utils/print'
import runtimeOptions from '../utils/runtime-options'
import Page from '../render-react-components/components/Page'

// function view2(req, res) {
//   res.send(renderToStaticMarkup(
//     <Page
//       title="Readr"
//       />
//   ))
// }

function view(req, res) {
  renderHtml(req.url, routesWithEnsure, runtimeOptions.env === 'production').then(htmlString => {
    res.send(htmlString)
  }, err => {
    const statusCode = err.statusCode || 500
    const htmlString = err.htmlString || 'Unknown error occurred!'

    if (!err.htmlString) {
      print.error(err)
    }

    res.status(statusCode).send(htmlString)
  })
}

export default view
