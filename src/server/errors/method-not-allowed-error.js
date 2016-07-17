'use strict'

module.exports = class MethodNotAllowedError {
  constructor(message) {
    this.name = 'MethodNotAllowedError'
    this.statusCode = 405
    this.message = message
    this.stack = new Error().stack
    this.type = this.name
  }
}
