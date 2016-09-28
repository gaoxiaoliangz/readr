interface ModifiedClass<P> extends __React.ComponentClass<P> {
  rewind: () => any
}

interface WithSideEffectFn {
  <TOwnProps>(reducePropsToState: any, handleStateChangeOnClienta: any): (component: any) => ModifiedClass<TOwnProps>
}

declare var withSideEffect: WithSideEffectFn

declare module "react-side-effect" {
  export = withSideEffect
}
