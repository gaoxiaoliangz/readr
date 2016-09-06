import GenericError from './generic-error'

export default class InternalServerError extends GenericError {
  constructor(message) {
    super(message, 'InternalServerError')

    this.statusCode = 500
  }
}
