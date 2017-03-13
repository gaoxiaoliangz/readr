import { take, call, fork, put } from 'redux-saga/effects'
import { takeEvery } from 'redux-saga'
import urlJoin from 'url-join'
import * as actions from '../actions'
import * as ACTION_TYPES from '../constants/actionTypes'
import callApi from '../utils/api/callApi'
import getApiRoot from '../helpers/getApiRoot'
import handleResponse from '../utils/api/handleResponse'

const API_ROOT = getApiRoot()

const createActionEntity = (types) => {
  return {
    request: (payload?, meta?: object) => {
      return {
        type: types.REQUEST,
        payload,
        meta: {
          ...{
            isApiFlow: true,
            isRequest: true
          },
          ...meta
        }
      }
    },

    success: (response, meta?: object) => {
      return {
        type: types.SUCCESS,
        payload: { response },
        meta: {
          ...{
            isApiFlow: true,
            isApiResponse: true
          },
          ...meta
        }
      }
    },

    failure: (error, meta?: object) => {
      return {
        type: types.FAILURE,
        payload: error,
        error: true,
        meta: {
          ...{
            isApiFlow: true,
            hasError: true
          },
          ...meta
        }
      }
    }
  }
}

function* handleLoadReq(action) {
  const { meta, payload } = action
  const { request } = payload
  const { parser, schema } = meta
  const flowActions = createActionEntity(meta.types)

  yield put(flowActions.request(payload, meta))
  try {
    let response = yield callApi(urlJoin(API_ROOT, request.url), {
      cookies: request.cookies
    })
    if (schema) {
      response = handleResponse(response, schema)
    } else {
      response = parser ? parser(response) : response
    }
    yield put(flowActions.success(response, {
      ...{
        isNormalized: Boolean(schema)
      },
      ...meta
    }))
  } catch (error) {
    yield put(flowActions.failure(error, meta))
  }
}

export default function* watchAllLoadRequests() {
  while (true) {
    const action = yield take('*')
    if (action.meta && action.meta.isSagaActions) {
      yield call(handleLoadReq, action)
    }
  }
}
