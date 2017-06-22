import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Fade from '../Fade'
import _ from 'lodash'
import styles from './Modal.scss'
import { lockScroll, unlockScroll } from '../../utils/browser/scroll'
import getScreenInfo from '../../utils/browser/getScreenInfo'

export interface Props {
  width: number
  onRequestClose: () => void
  open: boolean
  className?: string
}

interface State {
  modalHeight?: number
  isModalHidden?: boolean
  isModalVerticalCenter?: boolean
  documentHeight?: number
  clicks?: number
}

class Modal extends Component<Props, State> {

  modal: HTMLDivElement

  constructor(props) {
    super(props)
    this.state = {
      modalHeight: 0,
      isModalHidden: false,
      isModalVerticalCenter: true,
      clicks: 0
    }
    this.setView = this.setView.bind(this)
    this.hideModal = this.hideModal.bind(this)
  }

  hideModal() {
    this.props.onRequestClose()
    unlockScroll()
  }

  setView() {
    let modalHeight = ReactDOM.findDOMNode(this.modal).clientHeight
    let isModalVerticalCenter = true
    let documentHeight = document.body.clientHeight

    if (window.innerHeight < modalHeight) {
      isModalVerticalCenter = false
    }

    if (window.innerHeight > document.body.clientHeight) {
      documentHeight = window.innerHeight
    }

    this.setState({
      modalHeight,
      isModalVerticalCenter,
      documentHeight
    })
  }

  componentWillReceiveProps(nextProps) {
  }

  shouldComponentUpdate(nextProps, nextState) {
    return !_.isEqual(this.state, nextState) || !_.isEqual(this.props, nextProps)
  }

  componentDidUpdate(prevProps) {
    // modal show
    if (!prevProps.open && this.props.open === true) {
      this.setView()
      lockScroll()
      window.addEventListener('resize', this.setView)
    }

    // modal hide
    if (prevProps.open === true && this.props.open === false) {
      window.removeEventListener('resize', this.setView)
      unlockScroll()
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.setView)
  }

  render() {
    const { open } = this.props
    const windowWidth = getScreenInfo().width

    const defaultClass = 'modal'
    const modalId = `modal-${(new Date()).valueOf()}`

    let className = this.props.className ? `${defaultClass} ${this.props.className}` : defaultClass

    const _width = (this.props.width ? this.props.width : 500)
    const width = _width + 40 < windowWidth ? _width : windowWidth - 40
    let height = this.state.modalHeight
    let style = {
      backdrop: {},
      verticalCenter: {},
      scroll: {},
      modal: {}
    }

    style.backdrop = {
      position: 'fixed',
      height: '100%',
      width: '100%',
      left: 0,
      top: 0,
      background: 'rgba(0, 0, 0, 0.23)',
      overflow: 'scroll'
    }

    style.verticalCenter = {
      width,
      marginTop: -height / 2,
      marginLeft: -width / 2,
      position: 'absolute',
      left: '50%',
      top: '50%'
    }

    style.scroll = {
      width,
      margin: '50px auto'
    }

    style.modal = {}

    if (this.state.isModalVerticalCenter) {
      style.modal = Object.assign({}, style.modal, style.verticalCenter)
    } else {
      style.modal = Object.assign({}, style.modal, style.scroll)
    }

    return (
      <Fade>
        {
          open === true && (
            <div
              onClick={e => {
                // 使用阻止冒泡会造成问题
                if ((e.target as any).querySelector(`#${modalId}`)) {
                  this.hideModal()
                }
              } }
              className={styles['modal-backdrop']}
              style={style.backdrop}
              >
              <div
                id={modalId}
                style={style.modal}
                className={`${styles['modal']} ${className}`}
                ref={ref => { this.modal = ref } }
                >
                {this.props.children}
              </div>
            </div>
          )
        }
      </Fade>
    )
  }
}

export default Modal
