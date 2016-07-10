'use strict'
const schemas = require('./schemas')
const Model = require('./model')
const dp = {}

Object.keys(schemas).forEach(key => {
  dp[key] = new Model(schemas[key])
})

module.exports = dp
