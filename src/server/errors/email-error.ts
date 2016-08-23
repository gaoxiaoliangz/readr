import GenericError from './generic-error'

export default class EmailError extends GenericError {
  constructor(message) {
    super(message)

    this.name = 'EmailError'
    this.statusCode = 500
  }
}
