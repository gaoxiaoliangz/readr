import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose, graphql } from 'react-apollo'
import _ from 'lodash'
import { sendNotification } from '../../actions'
import POSTS_QUERY from '../../graphql/Posts.gql'
import withIndicator from '../../helpers/withIndicator'
import { PostVisibility, PostCategories, PostStatus } from '../../../server/api/enums'
import InfoTable from '../../components/InfoTable'
import Button from '../../components/Button/Button'

type Data = State.Apollo<{
  posts: Schema.Connection<{
    slug: string
    title: string
    description: string
    author: string
    tags: {
      id: string
      name: string
      slug: string
    }[]
    markdown: string
    visibility: keyof PostVisibility
    status: keyof PostStatus
    image: string
    category: keyof PostCategories
    id: string
    objectId: string
    createdAt: string
    updatedAt: string
  }>
}>

interface OwnProps {
}

interface State {
  postStatus: 'PUBLISHED' | 'UNPUBLISHED' | 'DRAFT' | ''
}

interface StateProps {
  sendNotification: typeof sendNotification
  data: Data
}

class ManagePosts extends Component<OwnProps & StateProps, State> {

  constructor(props) {
    super(props)
    this.state = {
      postStatus: ''
    }
  }

  _loadMore() {
    const lastCursor = _.last(this.props.data.posts.edges).cursor
    this.props.data.fetchMore({
      variables: {
        after: lastCursor
      },
      updateQuery: (previousResult: Data, { fetchMoreResult }: { fetchMoreResult: Data }) => {
        const edges = [...previousResult.posts.edges, ...fetchMoreResult.posts.edges]
        return _.merge({}, fetchMoreResult, {
          posts: {
            edges
          }
        })
      }
    })
  }

  render() {
    const rows = this.props.data.posts.edges.map((edge, index) => {
      const { node } = edge
      return [
        node.title,
        node.slug,
        node.status
      ]
    })

    return (
      <div>
        <InfoTable
          header={['标题', '路径', '状态']}
          rows={rows}
        />
        {
          this.props.data.posts.pageInfo.hasNextPage && (
            <Button
              onClick={() => { this._loadMore() }}
              width={200}
              color="blue"
            >{this.props.data.loading ? '加载中 ...' : '更多'}</Button>
          )
        }
      </div>
    )
  }
}

const withData = graphql(POSTS_QUERY, {
  options: (props: OwnProps) => {
    return {
      variables: {
        first: 5
      }
    }
  }
})

export default compose<{}, {}, {}, OwnProps>(
  withData,
  connect(
    (state, ownProps) => {
      return {}
    },
    { sendNotification }
  ),
  withIndicator()
)(ManagePosts)
