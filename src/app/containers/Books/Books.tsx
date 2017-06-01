import React, { Component } from 'react'
import { connect } from 'react-redux'
import Button from '../../components/Button'
import BookListSection from '../../components/BookListSection'
import Container from '../../components/Container'
import _ from 'lodash'
import CSSModules from 'react-css-modules'
import styles from './Books.scss'
import { gql, graphql, compose } from 'react-apollo'
import withIndicator from '../../helpers/withIndicator'

interface OwnProps {
  sectionTitle?: string
  keyword?: string
}

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
}

@CSSModules(styles)
class Books extends Component<Props & OwnProps, {}> {

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

    return (
      <Container>
        <BookListSection
          title={this.props.sectionTitle}
          bookEntities={bookEntities}
          isFetching={this.props.data.loading}
        />
        {
          this.props.data.books.pageInfo.hasNextPage && (
            <Button
              onClick={() => { this.loadMore() }}
              styleName="btn-load-more"
              width={200}
              color="green"
              size="large"
            >{this.props.data.loading ? '加载中 ...' : '更多'}</Button>
          )
        }
      </Container>
    )
  }
}

const withData = graphql(gql`
  query queryBooks($after: String, $query: String) {
    books(first: 6, after: $after, query: $query) {
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
`, {
    options: (props) => {
      return {
        variables: {
          query: props.keyword
        }
      }
    }
  })

const mapStateToProps = (state, ownProps) => {
  return {}
}

export default compose<{}, {}, {}, React.ComponentClass<OwnProps>>(
  connect(mapStateToProps),
  withData,
  withIndicator()
)(Books)
