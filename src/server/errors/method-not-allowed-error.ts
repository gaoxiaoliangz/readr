import GenericError from './generic-error'

export default class MethodNotAllowedError extends GenericError {
  constructor(message) {
    super(message)

    this.name = 'MethodNotAllowedError'
    this.statusCode = 405
  }
}
