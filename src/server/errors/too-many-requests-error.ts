import GenericError from './generic-error'

export default class TooManyRequestsError extends GenericError {
  constructor(message) {
    super(message)

    this.name = 'TooManyRequestsError'
    this.statusCode = 429
  }
}
