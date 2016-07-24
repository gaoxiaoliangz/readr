import React, { Component } from 'react'
import { MsgType } from '../../actions/notification'
import Icon from '../icon'
import CSSModules from 'react-css-modules'
const styles: any = require('./alert.scss')
// import classnames from 'classnames'

interface Props {
  message: string
  type?: MsgType
  onRequestClose?: () => void
  visible: boolean
}

@CSSModules(styles, {
  allowMultiple: true
})
class Alert extends Component<Props, {}> {
  render() {
    const type = this.props.type ? this.props.type : 'success'
    return (
      <div>
        {
          this.props.visible && (
            <div
              styleName={`alert--${type}`}
            >
            <div styleName="alert-close">
              <Icon
                onClick={this.props.onRequestClose}
                name="close"
              />
            </div>
              {this.props.message}
            </div>
          )
        }
      </div>
    )
  }
}

export default Alert
