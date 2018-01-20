import React, { Component } from 'react'
import { Button, Layout } from 'antd'
import _ from 'lodash'
import BrandingContainer from '../../containers/BrandingContainer'
import './Welcome.scss'
import mobilePic from './mobile.png'
import Colophon from '../../components/Colophon/Colophon'

class Welcome extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="page-welcome">
        <div className="hero-header">
          <BrandingContainer innerProps={{ dark: true }} />
          <section className="section">
            <div className="section__content">
              <h1 className="section__title section__title--light section__title--hero">You deserve a better reading experience.</h1>
              <h2 className="sub-title">An elegant web reader created for you.</h2>
            </div>
          </section>
        </div>
        <section className="section section--quote">
          <div className="section__content">
            <div className="quote">We believe having a place to truly focus on what you read is important. That's why we built readr.</div>
          </div>
        </section>
        <section className="section section--access">
          <div className="section__content clearfix">
            <div className="section__mobile-pic left">
              <img src={mobilePic} />
            </div>
            <div className="right">
              <h1 className="section__title">随时随地阅读</h1>
              <p>使用最前沿的 web 技术，支持桌面浏览器，iPhone 安卓设备登录，阅读进度自动同步</p>
            </div>
          </div>
        </section>
        <section className="section section--join">
          <div className="section__content clearfix">
            <h1 className="section__title section__title--small section__title--light">Start Using Readr Today</h1>
            <Button>Sign Up</Button>
          </div>
        </section>
        <Colophon dark />
      </div >
    )
  }
}

export default Welcome
