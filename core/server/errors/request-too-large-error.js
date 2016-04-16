'use strict'

module.exports = class RequestEntityTooLargeError {
  constructor(message) {
    this.name = 'RequestEntityTooLargeError'
    this.statusCode = 413
    this.message = message
    this.stack = new Error().stack
    this.errorType = this.name
  }
}
