import GenericError from './generic-error'

export default class UnauthorizedError extends GenericError {
  constructor(message) {
    super(message)

    this.name = 'UnauthorizedError'
    this.statusCode = 401
  }
}
