import React, { Component } from 'react'
import PT from 'prop-types'
import { preventScroll } from '../../utils/scroll'
import './LeftPanel.scss'
import Backdrop from '../Backdrop/Backdrop'
// import { Fade, Slide } from '../animations'

// todo
const Fade = props => <div>{props.children}</div>
const Slide = props => <div>{props.children}</div>

// interface Props {
//   show: boolean
//   onRequestClose?: () => void
// }

class LeftPanel extends Component {
  static propTypes = {
    onRequestClose: PT.func,
    show: PT.bool.isRequired
  }

  componentDidMount() {
    preventScroll.init('.js-nav-scroll')
  }

  componentWillUnmount() {
    preventScroll.destroy('.js-nav-scroll')
  }

  _handleBackdropClick = () => {
    if (this.props.onRequestClose) this.props.onRequestClose()
  }

  render() {
    const { show } = this.props
    const navStyle = {
      zIndex: 1200
    }

    return (
      <Slide direction="right">
        {
          show && (
            <div className="js-nav-scroll" styleName="viewer-nav" style={navStyle}>
              <div styleName="wrap">
                {this.props.children}
              </div>
            </div>
          )
        }
        <Fade>
          {
            show && (
              <Backdrop
                style={{
                  background: 'rgba(0,0,0,0.4)'
                }}
                show
                zIndex={1100}
                onClick={this._handleBackdropClick}
              />
            )
          }
        </Fade>
      </Slide>
    )
  }
}

export default LeftPanel
