import _ from 'lodash'
import { createSelector } from 'reselect'

const FORM = 'form2'
const VALUE = 'value'

export const fullForm = name => state => _.get(state, [FORM, name], {})

export const formValues = name => createSelector(
  fullForm(name),
  form => {
    return _.mapValues(form, val => {
      return val[VALUE]
    })
  }
)
