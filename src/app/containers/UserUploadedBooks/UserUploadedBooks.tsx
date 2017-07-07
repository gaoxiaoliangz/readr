import React, { Component } from 'react'
import { connect } from 'react-redux'
import Button from '../../components/Button'
import BookListSection from '../../components/BookListSection'
import Container from '../../components/Container'
import BOOKS_QUERY from '../../graphql/UserUploadedBooks.gql'
import _ from 'lodash'
import CSSModules from 'react-css-modules'
import styles from './UserUploadedBooks.scss'
import { graphql, compose } from 'react-apollo'
import withIndicator from '../../helpers/withIndicator'

interface OwnProps {
  sectionTitle?: string
  keyword?: string
  prependList?: any[]
}

type Data = State.Apollo<{
  viewer: {
    books: Schema.Connection<{
      id: string
      title: string
      authors: {
        name: string
      }[]
      description: string
      cover: string
    }>
  }
}>

interface Props {
  data: Data
}

@CSSModules(styles)
class UserUploadedBooks extends Component<Props & OwnProps, {}> {

  loadMore() {
    const lastCursor = _.last(this.props.data.viewer.books.edges).cursor
    this.props.data.fetchMore({
      variables: {
        after: lastCursor
      },
      updateQuery: (previousResult: Data, { fetchMoreResult }: { fetchMoreResult: Data }) => {
        const edges = [...previousResult.viewer.books.edges, ...fetchMoreResult.viewer.books.edges]
        const cloned = _.cloneDeep(fetchMoreResult)
        cloned.viewer.books.edges = edges
        return cloned
      }
    })
  }

  refetch() {
    this.props.data.refetch()
  }

  componentDidMount() {
    // since there's no way to let this component refetch from the parent scope,
    // I have to make it rerender in order to refetch
    this.refetch()
  }

  render() {
    const {prependList} = this.props
    const bookEntities = this.props.data.loading
      ? []
      : this.props.data.viewer.books.edges.map(edge => {
        return edge.node
      })

    return (
      <div>
        <BookListSection
          title={this.props.sectionTitle}
          bookEntities={bookEntities}
          isFetching={this.props.data.loading}
          prependList={prependList}
        />
        {
          this.props.data.viewer.books.pageInfo.hasNextPage && (
            <Button
              onClick={() => { this.loadMore() }}
              styleName="btn-load-more"
              width={200}
              color="green"
              size="large"
            >{this.props.data.loading ? '加载中 ...' : '更多'}</Button>
          )
        }
      </div>
    )
  }
}

const withData = graphql(BOOKS_QUERY, {
  options: (props) => {
    return {
      variables: {
        query: props.keyword,
        first: 9
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
)(UserUploadedBooks)
