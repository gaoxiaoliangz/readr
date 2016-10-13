import * as actions from '../actions'
import _ from 'lodash'

const FORM = actions.FORM

const effects = {
  [FORM.CHANGE](state, action) {
    const {payload, meta: { field, form }} = action

    return _.merge({}, state, {
      [form]: {
        [field]: {
          value: payload
        }
      }
    })
  },

  [FORM.RESET](state, action) {
    const {meta: { form }} = action

    return _.assign({}, state, {
      [form]: {}
    })
  }
}

export default function form(formState = {}, action) {
  const effect = effects[action.type]

  return effect
    ? effect(formState, action)
    : formState
}
