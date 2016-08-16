import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import Switcher from '../../elements/Switcher'
import CSSModules from 'react-css-modules'

interface Props {
  name: string
}

// @CSSModules(styles)
class ViewerPreference extends Component<Props, any> {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="viewer-preference">
        <ul className="options">
          <li className="option option-font-size">
            <span>A-</span><span>A+</span>
          </li>
          <li className="option option-scroll">
            <span className="label">滚动模式</span>
            <Switcher value={true} />
          </li>
          <li className="option option-theme">
            <span style={{background: '#fff'}}>theme1</span>
            <span style={{background: '#eee'}}>theme2</span>
            <span style={{background: '#222'}}>theme3</span>
          </li>
        </ul>
      </div>
    )
  }
}

export default connect(

)(ViewerPreference as any)
