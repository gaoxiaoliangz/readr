import React, { Component } from 'react'
import { Slide } from '../animations'
import CSSModules from 'react-css-modules'
import styles from './Panel.scss'
import cx from 'classnames'

interface OwnProps {
  className?: string
  show?: boolean
  position?: 'top' | 'bottom'
}

@CSSModules(styles)
class Panel extends Component<OwnProps, {}> {
  render() {
    const { show, className, position } = this.props
    let animationDirection

    if (position === 'top') {
      animationDirection = 'down'
    } else if (position === 'bottom') {
      animationDirection = 'up'
    }

    const panelStyleName = cx({
      'panel--top': position === 'top',
      'panel--bottom': position === 'bottom',
    })

    return (
      <Slide
        direction={animationDirection}
      >
        {
          (show) && (
            <div
              styleName={panelStyleName}
              className={className || ''}
            >
              <div styleName="container">
                {this.props.children}
              </div>
            </div>
          )
        }
      </Slide>
    )
  }
}

Panel['defaultProps'] = {
  position: 'top'
}

export default Panel
