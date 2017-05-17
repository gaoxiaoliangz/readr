import React, { Component } from 'react'
import _ from 'lodash'
import CSSModules from 'react-css-modules'
import styles from './PopBox.scss'
import { Slide } from '../animations'
import Backdrop from '../Backdrop'

interface OwnProps {
  show: boolean
  onRequestClose: () => void
  fixed?: boolean
  position?: {
    top?: number
    left?: number
    right?: number
    bottom?: number
  }
  width?: number | '100%'
  height?: number | 'auto' | '100%'
}

@CSSModules(styles)
class PopBox extends Component<OwnProps, {}> {

  constructor(props) {
    super(props)
    this.handleDropbackClick = this.handleDropbackClick.bind(this)
  }

  handleDropbackClick(e) {
    // should be fine here
    e.stopPropagation()
    this.props.onRequestClose()
  }

  render() {
    const { show, fixed, width, height, position } = this.props
    const popBoxStyle: React.CSSProperties = {
      width,
      height,
      position: fixed ? 'fixed' : 'absolute',
      ...position
    }

    return (
      <Slide direction="down">
        {
          show && (
            <div styleName="pop-box" style={popBoxStyle}>
              {this.props.children}
            </div>
          )
        }
        <Backdrop
          show={show}
          onClick={this.handleDropbackClick}
        />
      </Slide>
    )
  }
}

PopBox['defaultProps'] = {
  width: 200,
  height: 'auto',
  fixed: false
}

export default PopBox
