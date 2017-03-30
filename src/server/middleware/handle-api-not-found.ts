import { notFoundError } from '../helpers'

export default function handleAPINotFound(req, res, next) {
  next(notFoundError('API'))
}
