import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { fetchBooks, fetchCollections } from 'actions/index'
import BookListSection from 'components/BookListSection'
import Loading from 'components/Loading'
import CandyBox from 'components/CandyBox'
import Body from 'side-effects/Body'

interface State {
  showRecentReading: boolean
}

class Home extends Component<any, State> {

  static fetchData({store}) {
    return store.dispatch(fetchBooks('newest'))
  }

  constructor(props) {
    super(props)
    this.state = {
      showRecentReading: false
    }
  }

  componentDidMount() {
    this.props.fetchBooks('newest')
    this.props.fetchCollections()
  }
  
  componentWillReceiveProps(nextProps) {
    if(this.props.session.isFetching && !nextProps.session.isFetching ) {
      if(nextProps.session.user.role !== 'visitor') {
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
    let listName = this.props.collection?this.props.collection.name:''
    let list = this.props.collection?this.props.collection.items:[]

    return (
      <div>
        <Body className="home" />
        <div className="row">
          <div className="col-md-8">
            <BookListSection bookList={newestBooks} title="新书速递" />
            <BookListSection bookList={list} title={listName} />
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
    whichPagination?whichPagination.ids.map(id => books[id]):[]
  )

  return {
    userBooks: genList(filteredBooks['user']),
    newestBooks: genList(filteredBooks['newest']),
    session: state.session,
    collection: (() => {
      for(let prop in collections) {
        return collections[prop]
      }
    })()
  }
}

export default connect(
  mapStateToProps,
  { fetchBooks, fetchCollections } as any
)(Home)
