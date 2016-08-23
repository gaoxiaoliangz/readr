import GenericError from './generic-error'

export default class UnsupportedFileTypeError extends GenericError {
  constructor(message) {
    super(message)

    this.name = 'UnsupportedFileTypeError'
    this.statusCode = 415
  }
}
