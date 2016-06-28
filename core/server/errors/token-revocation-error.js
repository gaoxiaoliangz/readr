'use strict'

module.exports = class TokenRevocationError {
  constructor(message) {
    this.name = 'TokenRevocationError'
    this.statusCode = 503
    this.message = message
    this.stack = new Error().stack
    this.type = this.name
  }
}
