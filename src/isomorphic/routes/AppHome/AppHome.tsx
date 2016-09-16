import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchBooks, fetchCollections, sendNotification } from '../../store/actions'
import BookListSection from '../../components/BookListSection'
import DocContainer from '../../containers/DocContainer'
import { Button } from '../../elements/_form'
import _ from 'lodash'
import CSSModules from 'react-css-modules'
import { Container } from '../../elements/_layout'
const styles = require('./AppHome.scss')

interface IProps {
}

interface IAllProps extends IProps {
  fetchBooks: any
  fetchCollections: any
  session: any
  newestBooks: any
  bookCollections: any
  sendNotification: any
  bookShelf: any[]
}

interface IState {
  showRecentReading: boolean
}

@CSSModules(styles)
class Home extends Component<IAllProps, IState> {

  static fetchData({store}) {
    return store.dispatch(fetchBooks())
  }

  constructor(props) {
    super(props)
    this.state = {
      showRecentReading: false
    }
  }

  componentDidMount() {
    this.props.fetchBooks()
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
    let { newestBooks, bookCollections } = this.props

    bookCollections = bookCollections
      .map(item => ({
        name: item.name,
        id: item.id,
        bookCovers: item.items.map(book => book.cover),
        description: item.description
      }))

    return (
      <DocContainer bodyClass="home">
        {
          this.props.session.user.role === 'visitor' && this.props.session.isFetching === false ? (
            <div styleName="hero-image">
              <Container>
                <div styleName="logo">Readr</div>
                <h1 styleName="page-title">新的阅读体验</h1>
                <Button to="/signup">现在加入</Button>
              </Container>
            </div>
          ) : null
        }
        <Container>
          <BookListSection
            bookEntities={newestBooks.slice(0, 6)}
            title="新书速递"
            moreLink="/browse"
            />
        </Container>
      </DocContainer>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    // todo: reselect
    userBooks: [],
    newestBooks: state.pagination.books.newest
      ? state.pagination.books.newest.ids.map(id => state.entities.books[id])
      : [],
    session: state.session,
    bookCollections: state.pagination.bookCollections.newest
      ? state.pagination.bookCollections.newest.ids.map(id => state.entities.bookCollections[id])
      : [],
    bookShelf: _.get(state.payloads, 'bookShelf.data', [])
  }
}

export default connect(
  mapStateToProps,
  { fetchBooks, fetchCollections, sendNotification }
)(Home as any)
