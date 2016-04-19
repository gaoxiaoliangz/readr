import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import { Appbar, Button, Container } from 'muicss/react'


class Colophon extends Component {
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
