/**
 * Combine multiple middleware together
 * Source: http://stackoverflow.com/questions/20274483/how-do-i-combine-connect-middleware-into-one-middleware
 *
 * @param {Function[]} mids functions of form:
 *   function(req, res, next) { ... }
 * @return {Function} single combined middleware
 */

export default function combineMiddleware(mids) {
  return mids.reduce((a, b) => {
    return (req, res, next) => {
      a(req, res, err => {
        if (err) {
          return next(err)
        }
        return b(req, res, next)
      })
    }
  })
}
