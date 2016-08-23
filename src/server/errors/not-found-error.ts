export default class NotFoundError {
  constructor(message) {
    this.name = 'NotFoundError'
    this.statusCode = 404
    this.message = message
    this.stack = new Error().stack
    this.type = this.name
  }
}
