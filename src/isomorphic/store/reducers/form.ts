import * as actions from '../actions'
import _ from 'lodash'

const FORM = actions.FORM

const effects = {
  [FORM.CHANGE](state, action) {
    const {payload, meta: { field, form }} = action

    return _.merge({}, state, {
      [form]: {
        values: {
          [field]: payload
        }
      }
    })
  },

  [FORM.DEFINE_FIELD](state, action) {
    const {payload: { name }, meta: { form }} = action

    return _.mergeWith({}, state, {
      [form]: {
        definition: [{
          name
        }]
      }
    }, (objValue, srcValue) => {
      if (_.isArray(objValue)) {
        return objValue.concat(srcValue)
      }
    })
  },

  [FORM.RESET](state, action) {
    const {meta: { form }} = action

    return _.assign({}, state, {
      [form]: {
        definition: _.get(state, [form, 'definition'], {}),
        meta: _.get(state, [form, 'meta'], {}),
        values: {}
      }
    })
  },

  [FORM.DESTROY](state, action) {
    const {meta: { form }} = action

    return _.omit(state, [form])
  },

  [FORM.TOUCH](state, action) {
    const {meta: { fields, form }} = action

    let touchedFields = {}

    fields.forEach(field => {
      touchedFields[field] = {
        touched: true
      }
    })

    return _.merge({}, state, {
      [form]: {
        meta: touchedFields
      }
    })
  }
}

export default function form(formState = {}, action) {
  const effect = effects[action.type]

  return effect
    ? effect(formState, action)
    : formState
}
