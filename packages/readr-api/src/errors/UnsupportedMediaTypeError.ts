import GenericError from './GenericError'

export default class UnsupportedFileTypeError extends GenericError {
  constructor(message) {
    super(message, 'UnsupportedFileTypeError')

    this.statusCode = 415
  }
}
