import GenericError from './GenericError'

export default class RequestEntityTooLargeError extends GenericError {
  constructor(message) {
    super(message, 'RequestEntityTooLargeError')

    this.statusCode = 413
  }
}
