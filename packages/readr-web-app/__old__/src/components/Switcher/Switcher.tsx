import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import _ from 'lodash'
import styles from './_switcher.scss'

interface IProps {
  value: boolean
  title?: string
  onChange?: (newValue: boolean) => void
  className?: string
  styleName?: string
}

interface IState {
}

@CSSModules(styles, {
  allowMultiple: true
})
class Switcher extends Component<IProps, IState> {
  render() {
    const { value, className } = this.props

    const isOn = Boolean(value)
    const statusText = isOn ? 'on' : 'off'

    return (
      <div className={className || ''} styleName="switcher-wrap">
        {
          this.props.title && (
            <span>{this.props.title}</span>
          )
        }
        <div
          onClick={e => {
            this.props.onChange(!isOn)
          }}
          styleName={`switcher--${statusText}`}
        >
          <div styleName="switcher-button"></div>
          <div styleName="switcher-track"></div>
        </div>
      </div >
    )
  }
}

export default Switcher
