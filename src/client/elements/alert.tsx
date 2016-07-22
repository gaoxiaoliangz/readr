import React, { Component } from 'react'
import { MsgType } from '../actions/notification'
import Icon from '../elements/icon'

interface Props {
  message: string
  type?: MsgType
  onRequestClose?: () => void
  visible: boolean
}

class Notification extends Component<Props, {}> {
  render() {
    const type = this.props.type ? this.props.type : 'success'
    return (
      <div>
        {
          this.props.visible && (
            <div
              className={`notification notification--${type} z1`.trim()}
            >
              <Icon
                onClick={this.props.onRequestClose}
                name="close"
              />
              {this.props.message}
            </div>
          )
        }
      </div>
    )
  }
}

export default Notification
