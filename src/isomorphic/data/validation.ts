import _ from 'lodash'

type Config = {
  validators: {
    [key: string]: [(value: string) => boolean, string]
  }[]
}

export default function validation(values, config?: Config) {
  const errors: any = {}

  _.keys(values).forEach(key => {
    if (!values[key]) {
      errors[key] = `不能为空！`
    }
  })

  return errors
}
