import NotFoundError from './not-found-error'
import ValidationError from './validation-error'
import BadRequestError from './bad-request-error'
import InternalServerError from './internal-server-error'
import NoPermissionError from './no-permission-error'
import UnauthorizedError from './unauthorized-error'
import RequestEntityTooLargeError from './request-too-large-error'
import UnsupportedMediaTypeError from './unsupported-file-type-error'
import EmailError from './email-error'
import MethodNotAllowedError from './method-not-allowed-error'
import TooManyRequestsError from './too-many-requests-error'
import TokenRevocationError from './token-revocation-error'
import GenericError from './generic-error'

export default {
  NotFoundError,
  ValidationError,
  BadRequestError,
  InternalServerError,
  NoPermissionError,
  UnauthorizedError,
  RequestEntityTooLargeError,
  UnsupportedMediaTypeError,
  EmailError,
  MethodNotAllowedError,
  TooManyRequestsError,
  TokenRevocationError,
  GenericError,
}
