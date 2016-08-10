import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { Link } from 'react-router'
import { fetchBooks, fetchCollections, fetchShelf, sendNotification, fetchProfile } from '../../store/actions'
import BookListSection from '../../components/BookListSection'
import { Button } from '../../elements/_form'
import { Tab, Tabs } from '../../elements/Tab'
import Container from '../../elements/_layout/Container'
import CSSModules from 'react-css-modules'
const styles: any = require('./_profile.scss')

interface IProps {
  fetchBooks?: any
  session?: any
  newestBooks?: any
  fetchShelf?: any
  fetchProfile?: any
}

@CSSModules(styles)
class Profile extends Component<IProps, {}> {

  // static fetchData({store, params}) {
  //   return store.dispatch(fetch())
  // }

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchBooks()
    this.props.fetchShelf()
    this.props.fetchProfile()
  }

  render() {
    let newestBooks = this.props.newestBooks

    return (
      <Container>
        <div styleName="profile">
          <div styleName="page-header">
            <div styleName="user-avatar">
              <img src="https://img3.doubanio.com/icon/ul43646706-43.jpg" alt="user_avatar"/>
            </div>
            <span styleName="username">username</span>
            <span styleName="tagline">something to say</span>
            <Button styleName="edit">编辑</Button>
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
      </Container>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    session: state.session,
    newestBooks: state.pagination.books.newest
      ? state.pagination.books.newest.ids.map(id => state.entities.books[id])
      : [],
  }
}

export default connect(
  mapStateToProps,
  { sendNotification, fetchBooks, fetchCollections, fetchShelf, fetchProfile }
)(Profile as any)
