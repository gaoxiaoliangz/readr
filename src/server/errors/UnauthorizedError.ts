import GenericError from './GenericError'

export default class UnauthorizedError extends GenericError {
  constructor(message) {
    super(message, 'UnauthorizedError')

    this.statusCode = 401
  }
}
