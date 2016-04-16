'use strict'

module.exports = class EmailError {
  constructor(message) {
    this.name = 'EmailError'
    this.statusCode = 500
    this.message = message
    this.stack = new Error().stack
    this.errorType = this.name
  }
}
