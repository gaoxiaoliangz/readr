import _ from 'lodash'
import humps from 'humps'
import { FETCH_STATUS } from '../../constants'

const receiveData = (types: RequestTypes, defaultData = {}, parser?) => {
  const _defaultData = {
    ...{
      fetchStatus: FETCH_STATUS.NONE
    },
    ...defaultData
  }
  return (state = _defaultData, action: LoaderAction) => {
    const { type, payload } = action
    const response = _.get(action, 'payload.response', {}) as {
      json: any
    }

    switch (type) {
      case types.REQUEST:
        return {
          ...state,
          ...{
            fetchStatus: FETCH_STATUS.LOADING
          }
        }

      case types.SUCCESS:
        const camelizedJson = humps.camelizeKeys(response.json)
        return {
          ...state,
          ...{
            fetchStatus: FETCH_STATUS.LOADED,
          },
          ...((parser ? parser(camelizedJson) : camelizedJson))
        }

      case types.FAILURE:
        return {
          ...state,
          ...{
            fetchStatus: FETCH_STATUS.FAILED,
            error: payload || new Error('Unknown error occurred!')
          },
        }

      default:
        return state
    }
  }
}

export default receiveData
