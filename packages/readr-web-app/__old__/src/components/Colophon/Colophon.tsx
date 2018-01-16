import React, { Component } from 'react'
import { Link } from 'react-router'
import Container from '../../components/Container'
import CSSModules from 'react-css-modules'
import styles from './Colophon.scss'

@CSSModules(styles, {
  allowMultiple: true
})
class Colophon extends Component<any, any> {
  render() {
    return (
      <div className="colophon" styleName="colophon">
        <Container>
          <div>
            <span>© 2015－2016 readrweb.com, all rights reserved.</span>
            <div styleName="links">
              <Link className="dark-link" to="/blog">博客</Link>
              <span className="sep">|</span>
              <Link className="dark-link" to="/about">关于</Link>
            </div>
          </div>
        </Container>
      </div>
    )
  }
}

export default Colophon
