import React, { Component } from 'react'
import { Button } from 'antd'
import BrandingContainer from '../../containers/BrandingContainer'
import './Welcome.scss?global' // eslint-disable-line
import mobilePic from './mobile.png'
import { signIn } from '../../service'
import Colophon from '../../components/Colophon/Colophon'

class Welcome extends Component {
  constructor(props) {
    super(props)
  }

  handleSignInClick = () => {
    signIn()
    return false
  }

  render() {
    return (
      <div className="page-welcome">
        <div className="hero-header">
          <BrandingContainer dark />
          <section className="section">
            <div className="section__content">
              <h1 className="section__title section__title--light section__title--hero">You deserve a better reading experience.</h1>
              <h2 className="sub-title">An elegant web reader created for you</h2>
            </div>
          </section>
        </div>
        <section className="section section--quote">
          <div className="section__content">
            <div className="quote">We believe having a place to truly focus on what you read is important. That is why we built readr.</div>
          </div>
        </section>
        <section className="section section--access">
          <div className="section__content clearfix">
            <div className="section__mobile-pic left">
              <img src={mobilePic} alt="mobile" />
            </div>
            <div className="right">
              <h1 className="section__title">Read anywhere</h1>
              <p>Powered by newest web tech, readr supports desktop and mobile devices. Reading progress is automatically synced.</p>
            </div>
          </div>
        </section>
        <section className="section section--join">
          <div className="section__content clearfix">
            <h1 className="section__title section__title--small section__title--light">Start Using Readr Today</h1>
            <Button onClick={this.handleSignInClick}>Sign in with Google</Button>
          </div>
        </section>
        <Colophon dark />
      </div >
    )
  }
}

export default Welcome
