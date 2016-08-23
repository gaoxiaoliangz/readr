import GenericError from './generic-error'

export default class RequestEntityTooLargeError extends GenericError {
  constructor(message) {
    super(message)

    this.name = 'RequestEntityTooLargeError'
    this.statusCode = 413
  }
}
