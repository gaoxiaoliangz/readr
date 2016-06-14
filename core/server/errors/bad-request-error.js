'use strict'

// module.exports = class BadRequestError {
//   constructor(message) {
//     this.name = 'BadRequestError'
//     this.statusCode = 400
//     this.message = message
//     this.stack = new Error().stack
//     this.errorType = this.name
//   }
// }

module.exports = class BadRequestError {
  constructor(message, code) {
    this.name = 'BadRequestError'
    this.statusCode = 400
    this.message = message
    this.code = code
    this.stack = new Error().stack
    this.errorType = this.name
  }
}
