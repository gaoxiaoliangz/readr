'use strict'
const apiConfigs = require('./api-config')
const modles = require('../models')

function makeApi(apiConfig) {
  let methods = {}

  methods.browse = () => {
    return modles.author.find({}).listRaw()
  }

  return methods
}

const api = {
  authors: makeApi(apiConfigs.authors)
}


module.exports = api
