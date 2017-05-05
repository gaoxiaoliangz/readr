import React, { Component } from 'react'
import { Slide } from '../animations'
import CSSModules from 'react-css-modules'
import styles from './HeaderPanel.scss'

interface OwnProps {
  className?: string
  show?: boolean
}

@CSSModules(styles)
class HeaderPanel extends Component<OwnProps, void> {
  render() {
    const { show, className } = this.props

    return (
      <Slide>
        {
          (show) && (
            <div
              styleName="viewer-panel"
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

export default HeaderPanel
