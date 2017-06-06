import GenericError from './GenericError'

export default class ValidationError extends GenericError {
  property: string

  constructor(message, offendingProperty?) {
    super(message, 'ValidationError')
    this.statusCode = 422

    if (offendingProperty) {
      this.property = offendingProperty
    }
  }
}
