import GenericError from './generic-error'

export default class NoPermissionError extends GenericError {
  constructor(message) {
    super(message, 'NoPermissionError')

    this.statusCode = 403
  }
}
