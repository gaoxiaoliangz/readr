import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { Link } from 'react-router'
import { fetchBooks, fetchCollections, fetchShelf, sendNotification } from '../actions'
import BookListSection from '../components/book-list-section'
import { Button } from '../elements/form'
import { Tab, Tabs } from '../elements/tab'

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
        <Tabs>
          <Tab title="收藏">
            我的收藏
          </Tab>
          <Tab title="读过">
            <BookListSection title="😄" bookEntities={newestBooks} />
          </Tab>
        </Tabs>
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
