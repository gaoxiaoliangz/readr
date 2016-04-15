'use strict'

module.exports = class BadRequestError {
  constructor(message) {
    this.name = 'BadRequestError'
    this.statusCode = 400
    this.message = message
    this.stack = new Error().stack
    this.errorType = this.name
  }
}
