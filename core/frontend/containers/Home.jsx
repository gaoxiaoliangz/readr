import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { fetchUserAuthInfo, fetchBooks, fetchCollection } from 'actions'
import BookListSection from 'components/BookListSection'
import Loading from 'components/Loading'
import CandyBox from 'components/CandyBox'

class Home extends Component {

  static fetchData({store}) {
    return store.dispatch(fetchBooks('newest'))
  }

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchBooks('newest')
    this.props.fetchBooks('user')
    this.props.fetchCollection('83340896')
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
    let collection = this.props.collection?this.props.collection.books:[]

    return (
      <div>
        <div className="row">
          <div className="col-md-8">
            <BookListSection bookList={newestBooks} title="新书速递" moreLink="/"/>
            <BookListSection bookList={newestBooks} title="近期热门" />
            <BookListSection bookList={collection} title="推荐书单" />
          </div>
          <div className="col-md-4">
            <CandyBox title="近期热门" list={hotBooks} />
            <CandyBox title="最近阅读" list={userBooks} />
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
    whichPagination?whichPagination.ids.map(id => books[id]):[]
  )

  return {
    userBooks: genList(filteredBooks['user']),
    newestBooks: genList(filteredBooks['newest']),
    collection: (() => {
      for(let prop in collections) {
        return collections[prop]
      }
    })()
  }
}

export default connect(
  mapStateToProps,
  { fetchBooks, fetchCollection }
)(Home)
