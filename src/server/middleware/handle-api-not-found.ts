import { notFoundError } from '../helpers'

export default function handleApiNotFound(req, res, next) {
  next(notFoundError('API'))
}
