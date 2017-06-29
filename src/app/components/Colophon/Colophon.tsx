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
          <p>© 2015－2016 readrweb.com, all rights reserved</p>
          <Link to="/about">关于</Link>
        </Container>
      </div>
    )
  }
}

export default Colophon
