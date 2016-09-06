import GenericError from './generic-error'

export default class UnsupportedFileTypeError extends GenericError {
  constructor(message) {
    super(message, 'UnsupportedFileTypeError')

    this.statusCode = 415
  }
}
