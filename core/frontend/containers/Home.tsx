import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { fetchBooks, fetchCollections } from 'actions/index'
import BookListSection from 'components/BookListSection'
import Loading from 'components/Loading'
import CandyBox from 'components/CandyBox'
import Body from 'side-effects/Body'
import Button from '../elements/Button'

interface State {
  showRecentReading: boolean
}

class Home extends Component<any, State> {

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
        this.props.fetchBooks('user')
        this.setState({
          showRecentReading: true
        })
      }
    }
  }

  render() {
    let newestBooks = this.props.newestBooks
    let hotBooks = newestBooks.map((book, index) => {
      return {
        name: book.title,
        link: `/book/${book.id}`
      }
    })
    let userBooks = this.props.userBooks.map((book, index) => {
      return {
        name: book.title,
        link: `/book/${book.id}`
      }
    })
    let listName = this.props.collection ? this.props.collection.name : ''
    let list = this.props.collection ? this.props.collection.items : []


    return (
      <div>
        <Body className="home" />
        <div className="row">
          {
            this.props.session.user.role === 'visitor' && !this.props.session.isFetching ? (
              <div className="hero-image">
                <div className="logo">Readr</div>
                <div className="page-title">新一代 web 阅读体验</div>
                <Button to="/signup">注册</Button>
              </div>
            ) : null
          }
          <div className="col-md-8">
            <BookListSection bookList={newestBooks} title="新书速递" />
            <BookListSection bookList={list} title={listName} moreLink="/collection" />
            <Link className="view-more" to="/collections">浏览更多书单 ></Link>
          </div>
          <div className="col-md-4">
            {
              this.state.showRecentReading ? (
                <CandyBox title="最近阅读" list={userBooks} />
              ) : null
            }
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  const {
    pagination: { filteredBooks },
    entities: { books, collections }
  } = state

  const genList = (whichPagination) => (
    whichPagination ? whichPagination.ids.map(id => books[id]) : []
  )

  return {
    userBooks: genList(filteredBooks['user']),
    newestBooks: genList(filteredBooks['newest']),
    session: state.session,
    collection: (() => {
      for (let prop in collections) {
        return collections[prop]
      }
    })()
  }
}

export default connect(
  mapStateToProps,
  { fetchBooks, fetchCollections } as any
)(Home)
