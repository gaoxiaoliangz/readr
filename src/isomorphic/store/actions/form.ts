export const FORM = {
  CHANGE: 'form/CHANGE',
  RESET: 'form/RESET'
}

export interface change {
  (form, field, value, touch, persistentSubmitErrors): any
}
export const change: change = (form, field, value, touch, persistentSubmitErrors) =>
  ({ type: FORM.CHANGE, meta: { form, field, touch, persistentSubmitErrors }, payload: value })

export const reset = form =>
  ({ type: FORM.RESET, meta: { form } })

export const form = {
  change,
  reset
}
