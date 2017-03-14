import _ from 'lodash'

const FETCH_STATUS = {
  LOADING: 'loading',
  NONE: 'NONE',
  LOADED: 'LOADED',
  FAILED: 'FAILED'
}

const receiveData = (types: RequestTypes, parser) => {
  return (state = { data: {}, fetchStatus: FETCH_STATUS.NONE }, action) => {
    const { type } = action
    const response = _.get(action, 'payload.response', {}) as {
      json: any
    }

    switch (type) {
      case types.REQUEST:
        return {
          fetchStatus: FETCH_STATUS.LOADING,
          data: state.data || {}
        }

      case types.SUCCESS:
        return {
          fetchStatus: FETCH_STATUS.LOADED,
          data: parser(response.json) || state.data || {}
        }

      case types.FAILURE:
        return {
          fetchStatus: FETCH_STATUS.FAILED,
          data: state.data || {},
          error: response.json || new Error('Unknown error occurred!')
        }

      default:
        return state
    }
  }
}

export default receiveData
