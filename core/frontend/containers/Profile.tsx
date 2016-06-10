import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { handleNotification, userAuth } from 'actions/index'
import NavTab from '../components/NavTab'
import { fetchBooks, fetchCollections } from 'actions/index'
import BookListSection from 'components/BookListSection'
import Button from 'elements/Button'

class Profile extends Component<any, any> {

  // static fetchData({store, params}) {
  //   return store.dispatch(fetch())
  // }

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.userAuth()
    this.props.fetchBooks('newest')
  }

  render(){
    let user = this.props.session.user
    let newestBooks = this.props.newestBooks

    return (
      <div className="profile">
        <div className="page-header">
          <div className="user-avatar">
            <img src="https://img3.doubanio.com/icon/ul43646706-43.jpg" alt="user_avatar"/>
          </div>
          <span className="username">username</span>
          <span className="tagline">something to say</span>
          <Button>编辑</Button>
        </div>
        <NavTab tabs={['收藏', '读过', '书评']} current={0} />
        <div>
          <BookListSection bookList={newestBooks} />
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
    })(),
    notification: state.notification
  }
}

export default connect(
  mapStateToProps,
  { handleNotification, userAuth, fetchBooks, fetchCollections } as any
)(Profile)
