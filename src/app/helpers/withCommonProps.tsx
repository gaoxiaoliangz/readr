import React, { createElement } from 'react'
import _ from 'lodash'

type Config = {
  wrapper?: string | JSX.Element
  omit?: string[]
}

// const withCommonProps = (config?: Config) => {
//   return (WrappedComponent) => {

//     const ComponentWithCommonProps = (props) => {
//       // <WrappedComponent {...props} />
//       const _props = _.omit(props, config.omit)
//       // return createElement(config.wrapper as any, _props)
//       // return createElement(WrappedComponent, _props)
//       return <WrappedComponent {...props} />
//     }

//     return ComponentWithCommonProps
//   }
// }

const withCommonProps = () => {
  return Wrapped => props => {

    if (props.injectedProps) {
      console.log(Wrapped)
      console.log(props)

      // const children = Array.isArray(props.children)
      //   ? React.Children.map(props.children, child => {
      //     if (child) {
      //       return React.cloneElement(child as any, props.injectedProps)
      //     }
      //     return child
      //   })
      //   : React.cloneElement(props.children, props.injectedProps)

      // const _props = {
      //   ...props,
      //   children
      // }

      // console.log(_props)

      const re = <div>
        <Wrapped {...props} />
      </div>

      // const re = React.createElement(Wrapped, props)
      // const children = Array.isArray(re.props.children)
      //   ? React.Children.map(re.props.children, child => {
      //     if (child) {
      //       return React.cloneElement(child as any, props.injectedProps)
      //     }
      //     return child
      //   })
      //   : React.cloneElement(props.children, props.injectedProps)

      // const ne = React.cloneElement(re, {
      //   ...props,
      //   children
      // })



      // let ref2
      // const ne = <Wrapped {...props} ref={ref => ref2 = ref} />
      // console.log(ref2)

      console.log(re)

      return re

      

    }
    return <Wrapped {...props} />
  }
}

export default withCommonProps
