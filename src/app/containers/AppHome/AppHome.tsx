import React, { Component } from 'react'
import { connect } from 'react-redux'
import CSSModules from 'react-css-modules'
import { graphql, compose } from 'react-apollo'
import _ from 'lodash'
import { loadBooks } from '../../actions/api'
import * as selectors from '../../selectors'
import BookListSection from '../../components/BookListSection'
import DocContainer from '../../components/DocContainer'
import { Button } from '../../components/form'
import { Container } from '../../components/layout'
import styles from './AppHome.scss'
import homeQuery from './query.gql'

interface Props {
  session: Session
  loadBooks: typeof loadBooks
  bookList: SelectedPagination
  data: State.Apollo<{
    books: Schema.Connection<{
      id: string
      title: string
      authors: any[]
      description: string
      cover: string
    }>
  }>
}

interface IState {
  showRecentReading?: boolean
}

@CSSModules(styles)
class AppHome extends Component<Props, IState> {

  constructor(props) {
    super(props)
    this.state = {
      showRecentReading: false
    }
  }

  componentWillMount() {
    // this.props.loadBooks()
  }

  // componentWillReceiveProps(nextProps) {
  //   if (this.props.session.isFetching && !nextProps.session.isFetching) {
  //     if (nextProps.session.user.role !== 'visitor') {
  //       this.setState({
  //         showRecentReading: true
  //       })
  //     }
  //   }
  // }

  render() {
    let { bookList, session } = this.props

    const bookEntities = this.props.data.loading
      ? []
      : this.props.data.books.edges.map(edge => {
        return edge.node
      })

    return (
      <DocContainer bodyClass="home" title="首页">
        {
          session.role === 'visitor' && session.fetchStatus === 'loaded' && (
            <div styleName="hero-image">
              <Container>
                <div styleName="logo">Readr</div>
                <h1 styleName="page-title">全新的阅读体验</h1>
                <Button to="/signup">现在加入</Button>
              </Container>
            </div>
          )
        }
        <Container>
          <BookListSection
            bookEntities={bookEntities.slice(0, 6)}
            title="新书速递"
            moreLink="/browse"
            isFetching={this.props.data.loading}
          />
        </Container>
      </DocContainer>
    )
  }
}

const AppHomeWithData = graphql(homeQuery)(AppHome)

function mapStateToProps(state, ownProps) {
  return {
    session: selectors.session(state),
    bookList: selectors.pagination.bookList(state)
  }
}

export default connect<{}, {}, {}>(
  mapStateToProps,
  { loadBooks }
)(AppHomeWithData)
