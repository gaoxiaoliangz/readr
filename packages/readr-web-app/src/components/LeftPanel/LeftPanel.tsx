import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import { preventScroll } from '../../utils/browser/scroll'
import styles from './LeftPanel.scss'
import Backdrop from '../Backdrop'
import { Fade, Slide } from '../animations'

interface Props {
  show: boolean
  onRequestClose?: () => void
}

@CSSModules(styles)
class LeftPanel extends Component<Props, void> {

  constructor(props) {
    super(props)
    this._handleDropbackClick = this._handleDropbackClick.bind(this)
  }

  componentDidMount() {
    preventScroll.init('.js-nav-scroll')
  }

  componentWillUnmount() {
    preventScroll.destroy('.js-nav-scroll')
  }

  _handleDropbackClick() {
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
                show={true}
                zIndex={1100}
                onClick={this._handleDropbackClick}
              />
            )
          }
        </Fade>
      </Slide>
    )
  }
}

export default LeftPanel
