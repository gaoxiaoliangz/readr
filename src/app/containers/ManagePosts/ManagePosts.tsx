import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose, graphql } from 'react-apollo'
import { sendNotification } from '../../actions'
import POSTS_QUERY from '../../graphql/Posts.gql'
import withIndicator from '../../helpers/withIndicator'
import { PostVisibility, PostCategories, PostStatus } from '../../../server/api/enums'
import InfoTable from '../../components/InfoTable'

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

interface StateProps {
  sendNotification: typeof sendNotification
  data: Data
}

class ManagePosts extends Component<OwnProps & StateProps, {}> {

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
      </div>
    )
  }
}

const withData = graphql(POSTS_QUERY, {
  options: (props: OwnProps) => {
    return {
      variables: {}
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
