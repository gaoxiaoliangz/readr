import React, { Component } from 'react'
import Container from '../../elements/_layout/Container'
import CSSModules from 'react-css-modules'
const styles = require('./Colophon.scss')

@CSSModules(styles, {
  allowMultiple: true
})
class Colophon extends Component<any, any> {
  render() {
    return (
      <div className="colophon" styleName="colophon">
        <Container>
          <p>© 2015－2016 readrweb.com, all rights reserved</p>
        </Container>
      </div>
    )
  }
}

export default Colophon
