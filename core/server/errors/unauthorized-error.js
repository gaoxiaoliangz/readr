'use strict'

module.exports = class UnauthorizedError {
  constructor(message) {
    this.name = 'UnauthorizedError'
    this.statusCode = 401
    this.message = message
    this.stack = new Error().stack
    this.type = this.name
  }
}
