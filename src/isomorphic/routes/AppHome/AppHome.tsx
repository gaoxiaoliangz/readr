import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadBooks, fetchCollections, sendNotification } from '../../store/actions'
import * as selectors from '../../store/selectors'
import BookListSection from '../../components/BookListSection'
import DocContainer from '../../containers/DocContainer'
import { Button } from '../../elements/form'
import _ from 'lodash'
import CSSModules from 'react-css-modules'
import { Container } from '../../elements/layout'
import styles from './AppHome.scss'

interface Props {
  loadBooks: typeof loadBooks
  fetchCollections: any
  session: any
  newestBooks: any
  sendNotification: any
  isBooksFetching: boolean
}

interface IState {
  showRecentReading?: boolean
}

@CSSModules(styles)
class Home extends Component<Props, IState> {

  static fetchData({store}) {
    return store.dispatch(loadBooks())
  }

  constructor(props) {
    super(props)
    this.state = {
      showRecentReading: false
    }
  }

  componentDidMount() {
    this.props.loadBooks()
    this.props.fetchCollections()
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.session.isFetching && !nextProps.session.isFetching) {
      if (nextProps.session.user.role !== 'visitor') {
        this.setState({
          showRecentReading: true
        })
      }
    }
  }

  render() {
    let { newestBooks, isBooksFetching } = this.props

    return (
      <DocContainer bodyClass="home">
        {
          this.props.session.user.role === 'visitor' && this.props.session.isFetching === false && (
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
    newestBooks: selectors.books(undefined, '1')(state),
    isBooksFetching: selectors.common.isPaginationFetching('books')(state),
    session: state.session,
  }
}

export default connect<{}, {}, {}>(
  mapStateToProps,
  { loadBooks, fetchCollections, sendNotification }
)(Home)
