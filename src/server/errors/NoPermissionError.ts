import GenericError from './GenericError'

export default class NoPermissionError extends GenericError {
  constructor(message) {
    super(message, 'NoPermissionError')

    this.statusCode = 403
  }
}
