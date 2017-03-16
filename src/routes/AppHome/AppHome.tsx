import React, { Component } from 'react'
import { connect } from 'react-redux'
import CSSModules from 'react-css-modules'
import _ from 'lodash'
import { loadBooks, fetchCollections, sendNotification, loadBooks2 } from '../../actions'
import * as selectors from '../../selectors'
import BookListSection from '../../components/BookListSection'
import DocContainer from '../../components/DocContainer'
import { Button } from '../../components/form'
import { Container } from '../../components/layout'
import styles from './AppHome.scss'

interface Props {
  loadBooks: typeof loadBooks
  fetchCollections: any
  session: any
  newestBooks: any
  sendNotification: any
  isBooksFetching: boolean
  loadBooks2: typeof loadBooks2
}

interface IState {
  showRecentReading?: boolean
}

@CSSModules(styles)
class AppHome extends Component<Props, IState> {

  constructor(props) {
    super(props)
    this.state = {
      showRecentReading: false
    }
  }

  componentWillMount() {
    // this.props.loadBooks()
    this.props.loadBooks2()
  }

  // componentWillReceiveProps(nextProps) {
  //   if (this.props.session.isFetching && !nextProps.session.isFetching) {
  //     if (nextProps.session.user.role !== 'visitor') {
  //       this.setState({
  //         showRecentReading: true
  //       })
  //     }
  //   }
  // }

  render() {
    let { newestBooks, isBooksFetching, session } = this.props

    return (
      <DocContainer bodyClass="home">
        {
          session.role === 'visitor' && session.fetchStatus === 'loaded' && (
            <div styleName="hero-image">
              <Container>
                <div styleName="logo">Readr</div>
                <h1 styleName="page-title">新的阅读体验</h1>
                <Button to="/signup">现在加入</Button>
              </Container>
            </div>
          )
        }
        <Container>
          <BookListSection
            bookEntities={newestBooks.slice(0, 6)}
            title="新书速递"
            moreLink="/browse"
            isFetching={isBooksFetching}
            />
        </Container>
      </DocContainer>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    // newestBooks: selectors.books(undefined, '1')(state),
    isBooksFetching: selectors.isPaginationFetching('books')(state),
    session: selectors.session(state),
    newestBooks: [],
    newestBooks2: selectors.defaultBooks(state)
  }
}

export default connect<{}, {}, {}>(
  mapStateToProps,
  { loadBooks, fetchCollections, sendNotification, loadBooks2 }
)(AppHome)
