import React, { Component } from 'react'
import { MsgType } from '../../store/actions/components'
import Icon from '../Icon'
import CSSModules from 'react-css-modules'
const styles: any = require('./Alert.scss')
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
                  size={15}
                  />
              </div>
              <div styleName="content">{this.props.message}</div>
            </div>
          )
        }
      </div>
    )
  }
}

export default Alert
