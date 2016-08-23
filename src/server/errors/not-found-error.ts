import GenericError from './generic-error'

export default class NotFoundError extends GenericError {
  constructor(message) {
    super(message)

    this.name = 'NotFoundError'
    this.statusCode = 404
  }
}
