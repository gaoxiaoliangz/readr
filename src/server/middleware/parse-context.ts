import _ from 'lodash'

export default function parseContext(req, res, next) {
  if (req.session.user) {
    req.user = _.omit(req.session.user, ['password', 'dateCreated', 'email'])
  } else {
    req.user = {
      role: 'visitor'
    }
  }

  next()
}
