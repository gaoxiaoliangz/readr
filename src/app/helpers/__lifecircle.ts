import _ from 'lodash'

// check if routing is changed
export const onRoutingChange = fn => (nextProps, currentProps) => {
  if (!currentProps.routing) {
    console.error('"routing" should be in props!')
    return false
  }

  const hasPathParamChanged = !_.isEqual(nextProps.routing, currentProps.routing)

  if (hasPathParamChanged) {
    fn(nextProps.routing)
  }
}
