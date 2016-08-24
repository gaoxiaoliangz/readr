import render from '../render'
import routesWithEnsure from '../../isomorphic/routes'
import React from 'react'
import print from '../utils/print'
import runtimeOptions from '../utils/runtime-options'

// console.log(routesWithEnsure)

function pages(req, res) {
  render({
    reqUrl: req.url,
    routes: routesWithEnsure,
    isProd: runtimeOptions.env === 'production',
    fetchData: runtimeOptions.serverRendering
  }).then(htmlString => {
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

export default pages
