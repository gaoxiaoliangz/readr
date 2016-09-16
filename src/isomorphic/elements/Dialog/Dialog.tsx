import React, { Component } from 'react'
import Modal, { IProps as IModalProps } from '../Modal'
import Button from '../_form/Button'
import CSSModules from 'react-css-modules'
const styles = require('./Dialog.scss')

interface IProps extends IModalProps {
  onConfirm: any
  title: string
}

interface IState {
}

@CSSModules(styles)
class Dialog extends Component<IProps, IState> {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
  }

  render() {
    return (
      <Modal
        isVisible={this.props.isVisible}
        onRequestClose={this.props.onRequestClose}
        width={this.props.width}
      >
        <div styleName="dialog">
          {
            this.props.title && (
              <div styleName="dialog-header">
                <h1 styleName="dialog-title">{this.props.title}</h1>
              </div>
            )
          }
          <div styleName="dialog-content">
            {this.props.children}
          </div>
          <div styleName="dialog-footer">
            <Button color="blue" onClick={this.props.onConfirm}>确认</Button>
            <Button color="white" onClick={this.props.onRequestClose}>取消</Button>
          </div>
        </div>
      </Modal>
    )
  }
}

export default Dialog
