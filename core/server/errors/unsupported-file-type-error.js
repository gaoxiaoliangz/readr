'use strict'

module.exports = class UnsupportedFileTypeError {
  constructor(message) {
    this.name = 'UnsupportedFileTypeError'
    this.statusCode = 415
    this.message = message
    this.stack = new Error().stack
    this.type = this.name
  }
}
