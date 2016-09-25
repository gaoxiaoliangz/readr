import _ from 'lodash'

// 检查 store 里面的 routing 是否变化
export const onRoutingChange = fn => nextProps => {
  const hasPathParamChanged = !_.isEqual(nextProps.routing, this.props.routing)

  if (hasPathParamChanged) {
    fn()
  }
}
