interface WithSideEffectFn {
  <TOwnProps>(reducePropsToState: any, handleStateChangeOnClienta: any): (component: any) => __React.ComponentClass<TOwnProps>
}

declare var withSideEffect: WithSideEffectFn

declare module "react-side-effect" {
  export = withSideEffect
}
