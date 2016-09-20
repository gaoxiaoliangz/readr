import React, { Component } from 'react'
import Modal from './Modal'
import CSSModules from 'react-css-modules'
const styles = require('./Modal.scss')

interface Props {
  title?: string
  open: boolean
  onRequestClose: () => void
  width?: number
  actions?: JSX.Element[]
}

interface State {
}

@CSSModules(styles)
class ModalPlus extends Component<Props, State> {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
  }

  render() {
    const { title, open, onRequestClose, width, actions } = this.props

    return (
      <Modal
        open={open}
        onRequestClose={onRequestClose}
        width={width || 600}
        >
        <div styleName="modal-plus">
          {
            title && (
              <div styleName="modal-header">
                <h1 styleName="modal-title">{title}</h1>
              </div>
            )
          }
          <div styleName="modal-body">
            {
              this.props.children
            }
          </div>
          {
            actions && (
              actions.map((action, index) => {
                return React.cloneElement(action, {
                  key: index
                })
              })
            )
          }
        </div>
      </Modal>
    )
  }
}

export default ModalPlus
