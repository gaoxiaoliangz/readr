'use strict'

module.exports = class NoPermissionError {
  constructor(message) {
    this.name = 'NoPermissionError'
    this.statusCode = 403
    this.message = message
    this.stack = new Error().stack
    this.type = this.name
  }
}
