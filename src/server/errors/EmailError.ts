import GenericError from './generic-error'

export default class EmailError extends GenericError {
  constructor(message) {
    super(message, 'EmailError')

    this.statusCode = 500
  }
}
