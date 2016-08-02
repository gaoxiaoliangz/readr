import React, { Component } from 'react'
import { Link } from 'react-router'
import Container from '../elements/_layout/Container'


class Colophon extends Component<any, any> {
  render() {
    return (
      <div className="colophon">
        <Container>
          <p>© 2015－2016 readrweb.com, all rights reserved</p>
        </Container>
      </div>
    )
  }
}

export default Colophon
