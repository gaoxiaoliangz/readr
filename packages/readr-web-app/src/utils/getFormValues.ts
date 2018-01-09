import _ from 'lodash'

export default function getFormValues(formData, fields: string[]) {
  if (!formData) {
    return {}
  }

  return _.mapValues(_.pick(formData, fields), val => {
    return val.value
  })
}
