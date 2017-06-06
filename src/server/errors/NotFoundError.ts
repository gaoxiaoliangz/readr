import GenericError from './GenericError'

export default class NotFoundError extends GenericError {
  constructor(message) {
    super(message, 'NotFoundError')

    this.statusCode = 404
  }
}
