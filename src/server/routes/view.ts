import { matchRoute, finalRender, generateProvider } from '../render-react-components'
import routesWithEnsure from '../../client/routes'
// const express: any = require('express')
// const router = new express.Router()

function view(req, res) {
  matchRoute(routesWithEnsure, req.url).then(result => {
    generateProvider(result.renderProps).then(providerString => {
      // res.send(providerString)
      res.render('app', {html: providerString})
    }, err => {
      res.send(err.message)
    })
  }, err => {
    res.status(404).send(err.message)
  })
}

export default view
