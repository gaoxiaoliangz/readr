import _ from 'lodash'

export default function parseQuery(queryString) {
  const params = queryString.split('&')
  let object = {}

  params.forEach(param => {
    const key = param.split('=')[0]
    const val = param.split('=')[1]

    object[key] = val
  })

  return object
}
