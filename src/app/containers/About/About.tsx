import React, { Component } from 'react'
import { connect } from 'react-redux'
import CSSModules from 'react-css-modules'
import _ from 'lodash'
import DocContainer from '../../components/DocContainer'
import { Container } from '../../components/layout'
import styles from './About.scss'
import Branding from '../Branding/Branding'
import Colophon from '../../components/Colophon/Colophon'
import PostRenderer from '../Post/PostRenderer'

interface Props {
}

interface State {
}

@CSSModules(styles)
class About extends Component<Props, State> {

  render() {
    return (
      <DocContainer bodyClass="page-about" title="关于">
        <Branding />
        <Container>
          <PostRenderer
            slug="about"
            getComponent={(data) => {
              return (
                <div>
                  <h1>{data.post.title}</h1>
                  <div>{data.post.markdown}</div>
                </div>
              )
            }}
          />
        </Container>
        <Colophon />
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
)(About)
