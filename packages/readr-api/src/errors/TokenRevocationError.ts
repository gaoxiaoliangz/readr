import GenericError from './GenericError'

export default class TokenRevocationError extends GenericError {
  constructor(message) {
    super(message, 'TokenRevocationError')

    this.statusCode = 503
  }
}
