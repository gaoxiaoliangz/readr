import * as cache from '../../data/cache'
import { put, call } from 'redux-saga/effects'
import _ from 'lodash'
import appConfig from '../../../app.config'

const OPTIONS = 'options'
const ID = 'id'
const DATA = 'data'
const TYPE = 'type'

export const API_CONFIG_KEYS = [OPTIONS, ID, DATA]
export const RESERVED_ACTION_KYES = [TYPE, ...API_CONFIG_KEYS]

// TODO
// 似乎需要优化，缓存的逻辑和获取的耦合太深了
export function* fetchEntity(entity: ActionEntity, apiFn, apiConfig, payload): any {
  const fullPayload = _.assign({}, apiConfig, payload)
  const id = apiConfig[ID]
  const options = apiConfig[OPTIONS]
  const apiArgs = [id, options].filter(arg => !_.isUndefined(arg))

  let hasCache
  let cacheId

  if (id && appConfig.enableEntityCache) {
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
    // 如果是 undefined 也不会有任何处理
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
