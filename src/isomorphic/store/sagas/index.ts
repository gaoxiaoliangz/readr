import { take, put, call, fork, select, apply } from 'redux-saga/effects'
import { takeEvery } from 'redux-saga'
import * as actions from '../actions'
import api from '../../services/api'
import * as selectors from '../selectors'
import * as cache from '../../data/cache'
import _ from 'lodash'

const OPTIONS = 'options'
const ID = 'id'
const DATA = 'data'
const TYPE = 'type'

export const RESERVED_ACTION_KYES_ARRAY = [OPTIONS, ID, DATA, TYPE]
export const RESERVED_ACTION_KYES_OBJ = { OPTIONS, ID, DATA, TYPE }

// TODO
// 似乎需要优化，缓存的逻辑和获取的耦合太深了
function* fetchEntity(entity: ActionEntity, apiFn, apiConfig, payload): any {
  const fullPayload = _.assign({}, apiConfig, payload)
  const id = apiConfig[ID]
  const options = apiConfig[OPTIONS]
  const apiArgs = [id, options].filter(arg => !_.isUndefined(arg))

  let hasCache
  let cacheId

  if (id) {
    cacheId = cache.createCacheId(apiFn + id + options)
    let cacheContent = cache.getCache(cacheId)
    hasCache = Boolean(cacheContent)

    if (hasCache) {
      let action = entity.loadCache(cacheContent, fullPayload)
      yield put(entity.request(fullPayload))
      yield put(action)
      return action
    }
  }

  yield put(entity.request(fullPayload))
  const {response, error} = yield call(apiFn, ...apiArgs)
  if (response) {
    if (hasCache === false) {
      cache.setCache(cacheId, response)
    }
    let action = entity.success(response, fullPayload)
    yield put(action)
    return action
  } else {
    let action = entity.failure(error, fullPayload)
    yield put(action)
    return action
  }
}

const fetchBook = fetchEntity.bind(null, actions.book, api.fetchBook)
const fetchBooks = fetchEntity.bind(null, actions.books, api.fetchBooks)
const fetchUsers = fetchEntity.bind(null, actions.users, api.fetchUsers)

function* loadUsers(options, callApi?: boolean): any {
  if (callApi) {
    yield call(fetchUsers, { options })
  }
}

function* handleLoad(fetchFn, parsedAction, callApi?): any {
  const {apiConfig, payload} = parsedAction
  // 在检查是否有数据的算法完成之前默认直接 call api
  if (typeof callApi === 'undefined' || callApi === true) {
    yield call(fetchFn, apiConfig, payload)
  }
}

function* watchLoginFlow(): any {
  // 使用 fetchEntity 会更好么？
  // 目前因为这种 put 类型的请求的返回值和一般的 entity 不一样所以不能直接使用
  while (true) {
    yield take(actions.USER_LOGOUT)
    yield put(actions.logout.request())
    try {
      yield call(api.logout)
      yield put(actions.logout.success())
    } catch (error) {
      yield put(actions.logout.failure(error))
    }
  }
}

function* watchAllLoadRequests(): any {
  while (true) {
    const action = yield take(actions.LOAD_ACTIONS)

    const apiConfig = _(action)
      .pick(action, RESERVED_ACTION_KYES_ARRAY)
      .omit(TYPE)
      .value()
    const payload = _.omit(action, RESERVED_ACTION_KYES_ARRAY)
    const parsedAction = { apiConfig, payload }

    switch (action.type) {
      case actions.LOAD_USERS:
        yield fork(loadUsers, action.options, true)
        break

      case actions.LOAD_BOOKS:
        yield fork(handleLoad, fetchBooks, parsedAction)
        break

      case actions.LOAD_BOOK:
        yield fork(handleLoad, fetchBook, parsedAction)
        break

      default:
      // nothing happens here
    }
  }
}

export default function* rootSaga() {
  yield [
    fork(watchAllLoadRequests),
    fork(watchLoginFlow)
  ]
}
