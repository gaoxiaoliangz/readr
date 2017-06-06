import GenericError from './GenericError'

export default class EmailError extends GenericError {
  constructor(message) {
    super(message, 'EmailError')

    this.statusCode = 500
  }
}
