import GenericError from './generic-error'

export default class RequestEntityTooLargeError extends GenericError {
  constructor(message) {
    super(message, 'RequestEntityTooLargeError')

    this.statusCode = 413
  }
}
