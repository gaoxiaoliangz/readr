'use strict'

module.exports = class ValidationError {
  constructor(message, offendingProperty) {
    this.name = 'ValidationError'
    this.statusCode = 422
    this.message = message
    this.stack = new Error().stack
    this.errorType = this.name
    if (offendingProperty) {
      this.property = offendingProperty
    }
  }
}
