import GenericError from './GenericError'

export default class MethodNotAllowedError extends GenericError {
  constructor(message) {
    super(message, 'MethodNotAllowedError')

    this.statusCode = 405
  }
}
