export const FORM = {
  CHANGE: 'form/CHANGE',
  RESET: 'form/RESET',
  TOUCH: 'form/TOUCH',
  DEFINE_FIELD: 'form/DEFINE_FIELD',
  DESTROY: 'form/DESTROY',
  INITIALIZE: 'form/INITIALIZE'
}

export const initialize = (form: string, values, keepDirty?: boolean) =>
  ({ type: FORM.INITIALIZE, meta: { form, keepDirty }, payload: values })

export const change = (form, field, value, touch, persistentSubmitErrors) =>
  ({ type: FORM.CHANGE, meta: { form, field, touch, persistentSubmitErrors }, payload: value })

export const touch = (form, fields: string[]) =>
  ({ type: FORM.TOUCH, meta: { form, fields } })

export const defineField = (form, name) =>
  ({ type: FORM.DEFINE_FIELD, meta: { form }, payload: { name } })

export const reset = (form: string) =>
  ({ type: FORM.RESET, meta: { form } })

export const destroy = (form: string) =>
  ({ type: FORM.DESTROY, meta: { form } })

// 方便取出所有的 form 命名空间下的所有 action
export const form = {
  change,
  touch,
  reset,
  defineField,
  destroy
}
