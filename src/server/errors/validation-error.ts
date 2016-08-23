import GenericError from './generic-error'

export default class ValidationError extends GenericError {
  property: string

  constructor(message, offendingProperty?) {
    super(message)

    this.name = 'ValidationError'
    this.statusCode = 422

    if (offendingProperty) {
      this.property = offendingProperty
    }
  }
}
