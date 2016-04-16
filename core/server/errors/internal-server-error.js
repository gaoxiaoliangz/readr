'use strict'

module.exports = class InternalServerError {
  constructor(message) {
    this.name = 'InternalServerError'
    this.statusCode = 500
    this.message = message
    this.stack = new Error().stack
    this.errorType = this.name
  }
}
