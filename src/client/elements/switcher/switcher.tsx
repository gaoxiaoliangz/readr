import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import classnames from 'classnames'
const styles = require('./switcher.scss')

// interface Props {
//   on: boolean
// }

interface IProps {
  value: string | boolean
  onChange?: (newValue: string | boolean) => void
  options?: {
    name?: string
    value: string | boolean
  }[]
}

interface IState {
}

@CSSModules(styles, {
  allowMultiple: true
})
class Switcher extends Component<IProps, IState> {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
  }

  render() {
    let isOn = this.props.value
    if (typeof this.props.value === 'string') {
      if (isOn === '1' || isOn === 'true') {
        isOn = true
      } else {
        isOn = false
      }
    }
    let state = Boolean(isOn) ? 'on' : 'off'

    return (
      <div
        onClick={e => {
          if (this.props.onChange) {
            let newValue

            if (this.props.options) {
              const currentValueIndex = this.props.options.map(option => option.value).indexOf(this.props.value)

              if (currentValueIndex === 1) {
                newValue = this.props.options[0].value
              } else if (currentValueIndex === 0) {
                newValue = this.props.options[1].value
              } else {
                newValue = this.props.options[0].value
                console.error('当前数据有误，将使用默认数据！')
              }
            } else {
              if (typeof this.props.value === 'string') {
                console.error('没有给 options 时必须使用布尔型的 value！')
              } else {
                newValue = !this.props.value
              }
            }

            this.props.onChange(newValue)
          }
        }}
        styleName={`switcher--${state}`}
      >
        <div styleName="switcher-button"></div>
        <div styleName="switcher-track"></div>
      </div>
    )
  }
}

// class Switcher extends Component<Props, any> {

//   constructor(props) {
//     super(props)
//   }

//   render() {
//     let className = this.props.on ? 'on' : 'off'
//     className = className + ' switcher'

//     return (
//       <div styleName={this.props.on ? 'switcher--on' : 'switcher--off'}>
//         <div styleName="switcher-button"></div>
//         <div styleName="switcher-track"></div>
//       </div>
//     )
//   }
// }

export default Switcher