import GenericError from './generic-error'

export default class InternalServerError extends GenericError {
  constructor(message) {
    super(message)

    this.name = 'InternalServerError'
    this.statusCode = 500
  }
}
