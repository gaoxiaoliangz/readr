import React, { Component } from 'react'
import { connect } from 'react-redux'
import Button from '../../components/Button'
import BookListSection from '../../components/BookListSection'
import { loadBooks } from '../../actions/api'
import Container from '../../components/Container'
import _ from 'lodash'
import * as selectors from '../../selectors'
import CSSModules from 'react-css-modules'
import styles from './Browse.scss'
import { gql, graphql } from 'react-apollo'
import Loading from '../../components/Loading'

type Data = State.Apollo<{
  books: Schema.Connection<{
    id: string
    title: string
    authors: {
      name: string
    }[]
    description: string
    cover: string
  }>
}>

interface Props {
  data: Data
  loadBooks: typeof loadBooks
}

@CSSModules(styles)
class Browse extends Component<Props, {}> {

  constructor(props) {
    super(props)
  }

  loadMore() {
    const lastCursor = _.last(this.props.data.books.edges).cursor
    this.props.data.fetchMore({
      variables: {
        after: lastCursor
      },
      updateQuery: (previousResult: Data, { fetchMoreResult }: { fetchMoreResult: Data }) => {
        const edges = [...previousResult.books.edges, ...fetchMoreResult.books.edges]
        return _.merge({}, fetchMoreResult, {
          books: {
            edges
          }
        })
      }
    })
  }

  render() {
    const bookEntities = this.props.data.loading
      ? []
      : this.props.data.books.edges.map(edge => {
        return edge.node
      })

    if (this.props.data.loading) {
      return <Loading center />
    }

    return (
      <Container className="archive">
        <BookListSection
          title="新书速递"
          bookEntities={bookEntities}
          isFetching={this.props.data.loading}
        />
        {
          this.props.data.books.pageInfo.hasNextPage && (
            <Button
              onClick={() => { this.loadMore() }}
              styleName="btn-load-more"
              width={200}
              color="white"
            >{this.props.data.loading ? '加载中 ...' : '加载更多'}</Button>
          )
        }
      </Container>
    )
  }
}

const BrowseWithData = graphql(gql`
  query queryBooks($after: String) {
    books(first: 6, after: $after) {
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
      edges {
        cursor
        node {
          id
          title
          cover
          description
          authors {
            name
          }
        }
      }
    }
  }
`)(Browse)

function mapStateToProps(state, ownProps) {
  return {
    bookList: selectors.pagination.bookList(state)
  }
}

export default connect(
  mapStateToProps,
  { loadBooks }
)(BrowseWithData)
