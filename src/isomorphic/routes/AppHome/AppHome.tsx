import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { fetchBooks, fetchCollections, sendNotification } from '../../store/actions'
import BookListSection from '../../components/BookListSection'
import CandyBox from '../../components/CandyBox'
import Body from '../../components/Body'
import { Button } from '../../elements/_form'
import _ from 'lodash'
import CSSModules from 'react-css-modules'
import CollectionSection from '../../components/CollectionSection'
const styles = require('./_app-home.scss')

interface IProps {
}

interface IAllProps extends IProps {
  fetchBooks: any
  fetchCollections: any
  session: any
  newestBooks: any
  collection: any
  sendNotification: any
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
        // this.props.fetchBooks('user')
        this.setState({
          showRecentReading: true
        })
      }
    }
  }

  render() {
    let newestBooks = this.props.newestBooks
    let listName = this.props.collection ? this.props.collection.name : ''
    let list = this.props.collection ? this.props.collection.items
      .filter(item => Boolean(item.refData))
      .map(item => item.refData) : []

    return (
      <div>
        <Body className="home" />
        <div className="row">
          {
            this.props.session.user.role === 'visitor' && !this.props.session.isFetching ? (
              <div className="hero-image">
                <div className="logo">Readr</div>
                <div className="page-title">new</div>
                <Button to="/signup">注册</Button>
              </div>
            ) : null
          }
          <div className="col-md-12">
            <BookListSection bookEntities={newestBooks} title="新书速递" />
            <BookListSection
              bookEntities={list}
              title={listName}
              moreLink={`/collections/${this.props.collection ? this.props.collection.id : ''}`}
            />
            <CollectionSection title="书单" list={[{name: 'aaa', id: '3223', cover: 'fiejfi'}]} />
            <Link className="view-more" to="/collections">浏览更多书单</Link>
          </div>
          <div className="col-md-12">
            {
              this.state.showRecentReading && (
                <CandyBox title="最近阅读" list={[]} />
              )
            }
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    userBooks: [],
    newestBooks: state.pagination.books.newest
      ? state.pagination.books.newest.ids.map(id => state.entities.books[id])
      : [],
    session: state.session,
    // todo: collection pagination
    collection: (() => {
      for (let prop in state.entities.bookCollections) {
        return state.entities.bookCollections[prop]
      }
    })()
  }
}

export default connect(
  mapStateToProps,
  { fetchBooks, fetchCollections, sendNotification }
)(Home as any)
