import { createModel } from '@gxl/redux-model'
import _ from 'lodash'
import { select, put } from 'redux-saga/effects'
import { updateUser } from '../service'

const NAMESPACE = 'app'

const model = createModel({
  namespace: NAMESPACE,
  state: {
    authStatus: 0, // 0: none, 1: logged in, 2: processing
    // isLoading: false,
    loading: {},
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
          yield put($set('user', _.pick(user, ['uid', 'displayName'])))
          yield updateUser(user.uid, user.displayName, user.email, user.photoURL)
          yield put($set('authStatus', 1))
        } else {
          yield put($set('user', {}))
          yield put($set('authStatus', 0))
        }
      } catch (error) {
        console.error(error)
      }
    }
  },
  computations: {
    startLoading(state, key) {
      return {
        ...state,
        loading: {
          ...state.loading,
          [key]: {
            ..._.get(state, ['loading', key]),
            isLoading: true
          }
        }
      }
    },
    stopLoading(state, key) {
      return {
        ...state,
        loading: {
          ...state.loading,
          [key]: {
            ..._.get(state, ['loading', key]),
            isLoading: false
          }
        }
      }
    },
    clearAllLoading(state) {
      return {
        ...state,
        loading: {}
      }
    }
  }
})

const { $set } = model.actionCreators

export default model
