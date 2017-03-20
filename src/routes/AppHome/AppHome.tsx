import React, { Component } from 'react'
import { connect } from 'react-redux'
import CSSModules from 'react-css-modules'
import _ from 'lodash'
import { loadBooks } from '../../actions/api'
import * as selectors from '../../selectors'
import BookListSection from '../../components/BookListSection'
import DocContainer from '../../components/DocContainer'
import { Button } from '../../components/form'
import { Container } from '../../components/layout'
import styles from './AppHome.scss'

interface Props {
  session: Session
  loadBooks: typeof loadBooks
  bookList: SelectedPagination
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
    this.props.loadBooks()
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
    let { bookList, session } = this.props

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
            bookEntities={_.get(bookList, ['pages', '1'], []).slice(0, 6)}
            title="新书速递"
            moreLink="/browse"
            isFetching={bookList.fetchStatus === 'loading'}
            />
        </Container>
      </DocContainer>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    session: selectors.session(state),
    bookList: selectors.pagination.bookList(state)
  }
}

export default connect<{}, {}, {}>(
  mapStateToProps,
  { loadBooks }
)(AppHome)
