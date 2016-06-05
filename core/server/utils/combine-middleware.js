/**
 * Combine multiple middleware together
 * Source: http://stackoverflow.com/questions/20274483/how-do-i-combine-connect-middleware-into-one-middleware
 *
 * @param {Function[]} mids functions of form:
 *   function(req, res, next) { ... }
 * @return {Function} single combined middleware
 */

function combineMiddleware(mids) {
  return mids.reduce(function(a, b) {
    return function(req, res, next) {
      a(req, res, function(err) {
        if (err) {
          return next(err);
        }
        b(req, res, next);
      })
    }
  })
}

module.exports = combineMiddleware