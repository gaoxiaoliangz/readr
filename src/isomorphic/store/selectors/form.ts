import _ from 'lodash'
import { createSelector } from 'reselect'

const FORM = 'form'

export const fullForm = name => state => _.get(state, [FORM, name], {})

export const formValues = name => createSelector(
  fullForm(name),
  form => {
    return form['values'] || {}
  }
)

export const formMeta = name => createSelector(
  fullForm(name),
  form => {
    return form['meta'] || {}
  }
)

export const formDefinition = name => createSelector(
  fullForm(name),
  form => {
    return form['definition'] || []
  }
)
