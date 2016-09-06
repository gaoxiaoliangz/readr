import GenericError from './generic-error'

export default class NotFoundError extends GenericError {
  constructor(message) {
    super(message, 'NotFoundError')

    this.statusCode = 404
  }
}
