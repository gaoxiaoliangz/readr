const path = require('path')
const express = require('express')
const router = express.Router()
const querystring = require("querystring")
const url = require('url')
const Promise = require('bluebird')
const middleware = require('../middleware')
const errors = require('../errors')
const runtimeOptions = require('../utils/runtime-options')
const env = runtimeOptions.env

function simpleRouter(req, res) {
  router.get('/', (req, res) => {
    res.status(200).render('app', { env: runtimeOptions.env, initialState: '{}' }) 
  })

  router.get('/console', middleware.checkAdminPermissions, (req, res) => {
    if(req.isAdmin) {
      res.status(200).render('console', { env: runtimeOptions.env, initialState: '{}' })  
    }else{
      res.redirect('/')
    }
  })
  
  router.get('*', (req, res) => {
    const error = new errors.NotFoundError('Not found')
    
    res.status(404).render('error', {
      message: error.message,
      error: env !== 'production'?error:{},
      env: env
    })
  })
  
  return router
}

module.exports = simpleRouter