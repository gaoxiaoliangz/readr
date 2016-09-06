import _ from 'lodash'

export default function parseContext(req, res, next) {
  if (req.session.user) {
    req.context = {
      user: _.omit(req.session.user, ['password', 'dateCreated', 'email'])
    }
  } else {
    req.context = {
      user: {
        role: 'visitor'
      }
    }
  }

  next()
}
