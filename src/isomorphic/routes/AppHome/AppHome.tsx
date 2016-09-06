import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchBooks, fetchCollections, sendNotification } from '../../store/actions'
import BookListSection from '../../components/BookListSection'
import CandyBox from '../../components/CandyBox'
import Body from '../../components/Body'
import { Button } from '../../elements/_form'
import _ from 'lodash'
import CSSModules from 'react-css-modules'
import CollectionSection from '../../components/CollectionSection'
import { Container } from '../../elements/_layout'
const styles = require('./_app-home.scss')

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
    let { newestBooks, bookCollections, bookShelf } = this.props

    bookCollections = bookCollections
      .map(item => ({
        name: item.name,
        id: item.id,
        bookCovers: item.items.map(book => book.cover),
        description: item.description
      }))

    const bookShelfList = bookShelf.filter(book => Boolean(book)).map(book => ({
      name: book.title,
      link: '/'
    }))

    return (
      <Body bodyClass="home">
        {
          this.props.session.user.role === 'visitor' && !this.props.session.isFetching ? (
            <div styleName="hero-image">
              <Container>
                <div styleName="logo">- Readr -</div>
                <h1 styleName="page-title">New Reading Experience</h1>
                <Button to="/signup">现在加入</Button>
              </Container>
            </div>
          ) : null
        }
        <Container>
          <BookListSection bookEntities={newestBooks} title="新书速递" />
        </Container>
        <CollectionSection title="书单" list={bookCollections} />
        <Container>
          <div className="col-md-12">
            {
              this.state.showRecentReading && (
                <CandyBox title="最近阅读" list={bookShelfList} />
              )
            }
          </div>
        </Container>
      </Body>
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
    // todo: collection pagination
    // collection: (() => {
    //   for (let prop in state.entities.bookCollections) {
    //     return state.entities.bookCollections[prop]
    //   }
    // })()
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
