import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import utils from '../../utils'
import Fade from '../_animations/Fade'
import CSSModules from 'react-css-modules'
const styles: any = require('./_modal.scss')

export interface IProps {
  width: number
  onRequestClose?: () => void
  isVisible: boolean
  className?: string
}

interface IState {
  modalHeight?: number
  isModalHidden?: boolean
  isModalVerticalCenter?: boolean
  documentHeight?: number
}

@CSSModules(styles)
class Modal extends Component<IProps, IState> {

  modal: any

  constructor(props) {
    super(props)
    this.state = {
      modalHeight: 0,
      isModalHidden: false,
      isModalVerticalCenter: true
    }
    this.setView = this.setView.bind(this)
    this.hideModal = this.hideModal.bind(this)
  }

  hideModal() {
    this.props.onRequestClose()
    utils.unlockScroll()
    window.removeEventListener('resize', this.setView)
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

  componentDidMount() {
  }

  componentWillReceiveProps(nextProps) {
  }

  componentDidUpdate(prevProps) {
    // modal show
    if (!prevProps.isVisible && this.props.isVisible === true) {
      this.setView()
      utils.lockScroll()
      window.addEventListener('resize', this.setView)
    }

    // modal hide
    if (prevProps.isVisible === true && this.props.isVisible === false) {
      window.removeEventListener('resize', this.setView)
      this.hideModal()
    }
  }

  componentUnmount() {
    window.removeEventListener('resize', this.setView)
  }

  render() {
    const defaultClass = 'modal'
    const modalId = `modal-${(new Date()).valueOf()}`

    let className = this.props.className ? `${defaultClass} ${this.props.className}` : defaultClass

    let width = this.props.width ? this.props.width : 500
    let height = this.state.modalHeight
    let style = {
      backdrop: {},
      verticalCenter: {},
      scroll: {},
      modal: {}
    }
    let isVisible = this.props.isVisible ? this.props.isVisible : false

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
          isVisible === true ? (
            <div
              onClick={e => {
                // 使用阻止冒泡会造成问题
                if ((e.target as any).querySelector(`#${modalId}`)) {
                  this.hideModal()
                }
              } }
              styleName="modal-backdrop"
              style={style.backdrop}
              >
              <div
                id={modalId}
                style={style.modal}
                className={className}
                styleName="modal"
                ref={ref => { this.modal = ref } }
                >
                {this.props.children}
              </div>
            </div>
          ) : null
        }
      </Fade>
    )
  }
}

export default Modal
