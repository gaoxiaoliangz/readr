export const FORM = {
  CHANGE: 'form/CHANGE',
  RESET: 'form/RESET',
  TOUCH: 'form/TOUCH',
  DEFINE_FIELD: 'form/DEFINE_FIELD',
  DESTROY: 'form/DESTROY'
}

export interface change {
  (form, field, value, touch, persistentSubmitErrors): any
}
export const change: change = (form, field, value, touch, persistentSubmitErrors) =>
  ({ type: FORM.CHANGE, meta: { form, field, touch, persistentSubmitErrors }, payload: value })

export interface touch {
  (form, fields: string[]): any
}
export const touch: touch = (form, fields) =>
  ({ type: FORM.TOUCH, meta: { form, fields } })

export interface defineField {
  (form, name): any
}
export const defineField: defineField = (form, name) =>
  ({ type: FORM.DEFINE_FIELD, meta: { form }, payload: { name } })

export interface reset {
  (form: string): any
}
export const reset: reset = form =>
  ({ type: FORM.RESET, meta: { form } })

export interface destroy {
  (form: string): any
}
export const destroy: destroy = (form) =>
  ({ type: FORM.DESTROY, meta: { form } })

export const form = {
  change,
  touch,
  reset,
  defineField,
  destroy
}
