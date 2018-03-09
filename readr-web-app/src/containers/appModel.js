import { createModel } from '@gxl/redux-model'
import _ from 'lodash'
import { select } from 'redux-saga/effects'
import { updateUser } from '../service'

const NAMESPACE = 'app'

const model = createModel({
  namespace: NAMESPACE,
  state: {
    user: {}
  },
  effects: {
    *handleUserStateChange(user) {
      try {
        const state = yield select()
        const selfState = state.app
  
        // We ignore token refresh events
        if (user && selfState.user.uid === user.uid) {
          return
        }
  
        if (user) {
          selfState.user.uid = user.uid
          this.$set('user', _.pick(user, ['uid', 'displayName']))
          yield updateUser(user.uid, user.displayName, user.email, user.photoURL)
        } else {
          this.$set('user', {})
        }
      } catch (error) {
        console.error(error)
      }
    }
  },
  computations: {}
})

export default model
