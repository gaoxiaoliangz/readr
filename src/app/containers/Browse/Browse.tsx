import React, { Component } from 'react'
import { connect } from 'react-redux'
import CSSModules from 'react-css-modules'
import _ from 'lodash'
import { graphql, compose } from 'react-apollo'
import * as selectors from '../../selectors'
import DocContainer from '../../components/DocContainer'
import { Container } from '../../components/layout'
import styles from './Browse.scss'
import Branding from '../Branding/Branding'
import Colophon from '../../components/Colophon/Colophon'
import Books from '../Books/Books'
import Slides from '../../components/Slides/Slides'
import SLIDES_QUERY from '../../graphql/Slides.gql'
import withIndicator from '../../helpers/withIndicator'

interface Props {
  session: State.Session
  data: State.Apollo<{
    slides: Schema.Connection<{
      id: string
      url: string
      picture: string
      description: string
      createdAt: string
    }>
  }>
}

interface IState {
}

@CSSModules(styles)
class Browse extends Component<Props, IState> {

  render() {
    return (
      <DocContainer bodyClass="page-browse" title="浏览">
        <div className="header">
          <Branding
            bgColor="rgba(0,0,0,0.2)"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              zIndex: 999
            }}
          />
          <Slides
            images={this.props.data.slides.edges.map(edge => ({
              src: edge.node.picture,
              to: edge.node.url
            }))}
            draggable={false}
            infinite={false}
            arrows={false}
            dots={false}
            disableSwipe={true}
          />
        </div>
        <Container>
          <Books
            sectionTitle="新书速递"
          />
        </Container>
        <Colophon />
      </DocContainer>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    session: selectors.session(state)
  }
}

const withData = graphql(SLIDES_QUERY, {
  options: () => {
    return {
      variables: {
        first: 3
      }
    }
  }
})

export default compose(
  withData,
  withIndicator(),
  connect(mapStateToProps)
)(Browse)
