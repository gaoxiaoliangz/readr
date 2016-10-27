import { notFoundError } from '../helpers'

export default function handleApiNotFound(req, res, next) {
  if (!req.__apiTouched) {
    next(notFoundError('API'))
  }
  next()
}
