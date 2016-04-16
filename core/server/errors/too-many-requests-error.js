'use strict'

module.exports = class TooManyRequestsError {
  constructor(message) {
    this.name = 'TooManyRequestsError'
    this.statusCode = 429
    this.message = message
    this.stack = new Error().stack
    this.errorType = this.name
  }
}
