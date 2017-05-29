import React, { Component } from 'react'
import { connect } from 'react-redux'
import CSSModules from 'react-css-modules'
// import { graphql } from 'react-apollo'
import _ from 'lodash'
import * as selectors from '../../selectors'
import DocContainer from '../../components/DocContainer'
import { Container } from '../../components/layout'
import styles from './AppHome.scss'
// import homeQuery from './query.gql'
import Branding from '../Branding/Branding'
import Colophon from '../../components/Colophon/Colophon'
import Browse from '../Browse/Browse'
import Slides from '../../components/Slides/Slides'

interface Props {
  session: Session
  data: State.Apollo<{
    books: Schema.Connection<{
      id: string
      title: string
      authors: {
        name: string
      }[]
      description: string
      cover: string
    }>
  }>
}

interface IState {
}

@CSSModules(styles)
class AppHome extends Component<Props, IState> {

  constructor(props) {
    super(props)
    this.state = {
      showRecentReading: false
    }
  }

  render() {
    const images = [
      'https://images.apple.com/v/home/df/images/promos/wwdc17_large_2x.jpg',
      'https://images.apple.com/v/home/df/images/promos/how_to_shoot_on_iphone_large_2x.jpg'
    ]

    return (
      <DocContainer bodyClass="home" title="首页">
        <div className="header">
          <Branding />
          <Slides images={images} />
        </div>
        <Container>
          <Browse />
        </Container>
        <Colophon />
      </DocContainer>
    )
  }
}

// const AppHomeWithData = graphql(homeQuery)(AppHome)

function mapStateToProps(state, ownProps) {
  return {
    session: selectors.session(state)
  }
}

export default connect<{}, {}, {}>(
  mapStateToProps
)(AppHome)
