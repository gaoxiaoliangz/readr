import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { Link } from 'react-router'
import Switcher from '../../elements/Switcher'
import CSSModules from 'react-css-modules'
const styles: any = require('./_viewer-preference.scss')

interface Props {
  name: string
}

@CSSModules(styles)
class ViewerPreference extends Component<Props, any> {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div styleName="viewer-preference">
        <ul className="options">
          <li styleName="option-font-size">
            <span>A-</span><span>A+</span>
          </li>
          <li styleName="option-scroll">
            <span className="label">滚动模式</span>
            <Switcher value={true} />
          </li>
          <li styleName="option-theme">
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
