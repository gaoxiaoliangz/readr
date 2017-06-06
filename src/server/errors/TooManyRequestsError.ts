import GenericError from './generic-error'

export default class TooManyRequestsError extends GenericError {
  constructor(message) {
    super(message, 'TooManyRequestsError')

    this.statusCode = 429
  }
}
