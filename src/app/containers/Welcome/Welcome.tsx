import React, { Component } from 'react'
import { connect } from 'react-redux'
import CSSModules from 'react-css-modules'
import _ from 'lodash'
import DocContainer from '../../components/DocContainer'
import { Button } from '../../components/form'
import { Container } from '../../components/layout'
import styles from './Welcome.scss'

interface Props {
}

interface State {
}

@CSSModules(styles)
class Welcome extends Component<Props, State> {

  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <DocContainer bodyClass="home" title="欢迎">
        <div styleName="hero-image">
          <Container>
            <h1 styleName="page-title">全新的阅读体验</h1>
            <Button size="large" color="white" to="/signup">现在加入</Button>
          </Container>
        </div>
        <div styleName="sections">
          <section styleName="feature-section">
            <Container>
              <h1>支持 epub 书籍文件</h1>
              <p>强大的 epub 文件解析能力，让您轻松构建属于自己的数字阅读图书馆</p>
            </Container>
          </section>
          <section styleName="feature-section">
            <Container>
              <h1>随时随地阅读</h1>
              <p>使用最前沿的 web 技术，支持桌面浏览器，iPhone 安卓设备登录，阅读进度自动同步</p>
            </Container>
          </section>
          <section styleName="feature-section">
            <Container>
              <h1>简约优雅的阅读体验</h1>
              <p>沉浸式的界面，让您更加专注于阅读本身</p>
            </Container>
          </section>
          <section styleName="feature-section">
            <Container>
              <div className="left">
                <h1>免费注册</h1>
                <p>加入 Readrweb，开始阅读</p>
              </div>
              <div className="right">
                <Button size="large" color="green" to="/signup">现在加入</Button>
              </div>
            </Container>
          </section>
        </div>
      </DocContainer>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
  }
}

export default connect<{}, {}, {}>(
  mapStateToProps
)(Welcome)
