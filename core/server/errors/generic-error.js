'use strict'

module.exports = class GenericError {
  constructor(message) {
    this.name = 'GenericError'
    this.statusCode = 500
    this.message = message
    this.stack = new Error().stack
    this.errorType = this.name
  }
}
