import React, { Component } from 'react'
import Modal from './Modal'
import styles from './Modal.scss'

interface Props {
  title?: string
  open: boolean
  onRequestClose: () => void
  width?: number
  actions?: JSX.Element[]
}

class ModalPlus extends Component<Props, {}> {

  render() {
    const { title, open, onRequestClose, width, actions } = this.props

    return (
      <Modal
        open={open}
        onRequestClose={onRequestClose}
        width={width || 600}
        >
        <div className={styles['modal-plus']}>
          {
            title && (
              <div className={styles['modal-header']}>
                <h1 className={styles['modal-title']}>{title}</h1>
              </div>
            )
          }
          <div className={styles['modal-body']}>
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
