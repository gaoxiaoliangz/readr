import React, { Component } from 'react'
import Modal, { IProps as IModalProps } from '../Modal'
import Button from '../_form/Button'

interface IProps extends IModalProps {
  onConfirm: any
  title: string
}

interface IState {
}

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
        <div className="dialog">
          {
            this.props.title && (
              <div className="dialog-header">
                <h1 className="dialog-title">{this.props.title}</h1>
              </div>
            )
          }
          <div className="dialog-content">
            {this.props.children}
          </div>
          <div className="dialog-footer">
            <Button color="blue" onClick={this.props.onConfirm}>确认</Button>
            <Button onClick={this.props.onRequestClose}>取消</Button>
          </div>
        </div>
      </Modal>
    )
  }
}

export default Dialog
