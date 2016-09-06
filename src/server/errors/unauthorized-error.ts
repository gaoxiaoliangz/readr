import GenericError from './generic-error'

export default class UnauthorizedError extends GenericError {
  constructor(message) {
    super(message, 'UnauthorizedError')

    this.statusCode = 401
  }
}
