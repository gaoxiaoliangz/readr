import _ from 'lodash'

export default function parseContext(req, res, next) {
  if (req.session.user) {
    req.user = _.pick(req.session.user, ['display_name', 'username', 'email', 'role', '_id'])
  } else {
    req.user = {
      role: 'visitor'
    }
  }

  next()
}
