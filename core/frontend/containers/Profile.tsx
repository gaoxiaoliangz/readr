import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { sendNotification } from 'actions/index'
import NavTab from '../components/NavTab'
import { fetchBooks, fetchCollections, fetchShelf } from 'actions/index'
import BookListSection from 'components/BookListSection'
import Button from 'elements/Button'

interface Props {
  fetchBooks?: any
  session?: any
  newestBooks?: any
  fetchShelf?: any
}

class Profile extends Component<Props, any> {

  // static fetchData({store, params}) {
  //   return store.dispatch(fetch())
  // }

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchBooks()
    this.props.fetchShelf('15593187')
  }

  render() {
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
          <BookListSection title="😄" bookEntities={newestBooks} />
        </div>
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    session: state.session,
    newestBooks: state.pagination.books.newest
      ? state.pagination.books.newest.ids.map(id => state.entities.books[id])
      : []
  }
}

export default connect(
  mapStateToProps,
  { sendNotification, fetchBooks, fetchCollections, fetchShelf }
)(Profile as any)
