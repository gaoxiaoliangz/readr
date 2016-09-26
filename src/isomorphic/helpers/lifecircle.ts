import _ from 'lodash'

// 检查 store 里面的 routing 是否变化
export const onRoutingChange = fn => (nextProps, currentProps) => {
  if (!currentProps.routing) {
    console.error('routing 需要现在组件 props 里面声明！')
    return false
  }

  const hasPathParamChanged = !_.isEqual(nextProps.routing, currentProps.routing)

  if (hasPathParamChanged) {
    fn(nextProps.routing)
  }
}
