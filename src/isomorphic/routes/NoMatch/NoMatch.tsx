import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import { Link } from 'react-router'
import DocContainer from '../../containers/DocContainer'
import Logo from '../../components/Logo'
const styles = require('./NoMatch.scss')

interface IProps {
  title?: string
  message?: string
}

@CSSModules(styles)
class NoMatch extends Component<IProps, {}> {
  render() {
    return (
      <DocContainer bodyClass={styles['no-match']} title="页面未找到">
        <div styleName="header">
          <Logo dark/>
        </div>
        <div styleName="body">
          <h1 styleName="title">抱歉，页面未找到！</h1>
          <div>你可以<Link className="border-link" to="/">返回首页</Link>继续浏览</div>
        </div>
      </DocContainer>
    )
  }
}

export default NoMatch
