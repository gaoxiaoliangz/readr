import GenericError from './generic-error'

export default class TokenRevocationError extends GenericError {
  constructor(message) {
    super(message, 'TokenRevocationError')

    this.statusCode = 503
  }
}
