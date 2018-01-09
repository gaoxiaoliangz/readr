import React, { Component } from 'react'
import Modal, { Props as IModalProps } from '../Modal'
import ModalFooter from './ModalFooter'
import CSSModules from 'react-css-modules'
const styles = require('./Modal.scss')

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
    const { onConfirm, onRequestClose, open } = this.props

    return (
      <Modal
        open={open}
        onRequestClose={onRequestClose}
        width={this.props.width}
      >
        <div styleName="confirm-modal">
          {
            this.props.title && (
              <div styleName="modal-header">
                <h1 styleName="modal-title">{this.props.title}</h1>
              </div>
            )
          }
          <div styleName="modal-content">
            {this.props.children}
          </div>
          <ModalFooter
            onConfirm={onConfirm}
            onCancel={onRequestClose}
          />
        </div>
      </Modal>
    )
  }
}

export default Dialog
