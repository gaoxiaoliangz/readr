import React, { Component } from 'react'
import PT from 'prop-types'
import './PopBox.scss'
import Backdrop from '../Backdrop/Backdrop'

const Slide = props => <div>{props.children}</div>

// interface OwnProps {
//   show: boolean
//   onRequestClose: () => void
//   fixed?: boolean
//   position?: {
//     top?: number | string
//     left?: number | string
//     right?: number | string
//     bottom?: number | string
//   }
//   style?: React.CSSProperties
//   width?: number | '100%'
//   height?: number | 'auto' | '100%'
// }

class PopBox extends Component {
  static propTypes = {
    onRequestClose: PT.func.isRequired,
    show: PT.bool.isRequired,
    fixed: PT.bool,
    position: PT.object,
    style: PT.object,
    width: PT.oneOfType([PT.number, PT.string]),
    height: PT.oneOfType([PT.number, PT.string])
  }
  
  static defaultProps = {
    width: 200,
    height: 'auto',
    fixed: false
  }

  handleBackdropClick = (e) => {
    // should be fine here
    e.stopPropagation()
    this.props.onRequestClose()
  }

  render() {
    const { show, fixed, width, height, position, style } = this.props
    const popBoxStyle = {
      ...style,
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
          onClick={this.handleBackdropClick}
        />
      </Slide>
    )
  }
}

export default PopBox
