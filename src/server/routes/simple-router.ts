import express from 'express'
// const querystring = require('querystring')
// const url = require('url')
// const Promise = require('bluebird')
import middleware from '../middleware'
const errors: any = require('../errors')
import runtimeOptions from '../utils/runtime-options'

const env = runtimeOptions.env
const router = express.Router()

function simpleRouter(req, res) {
  router.get('/', (req, res) => {
    res.status(200).render('app', { env: runtimeOptions.env, initialState: '{}' })
  })

  router.get('/console', middleware.requirePermissionsOf('admin'), (req, res) => {
    if (req.isAdmin) {
      res.status(200).render('console', { env: runtimeOptions.env, initialState: '{}' })
    } else {
      res.redirect('/')
    }
  })

  router.get('*', (req, res) => {
    const error = new errors.NotFoundError('Not found')

    res.status(404).render('error', {
      message: error.message,
      error: env !== 'production' ? error : {},
      env
    })
  })

  return router
}

export default simpleRouter
