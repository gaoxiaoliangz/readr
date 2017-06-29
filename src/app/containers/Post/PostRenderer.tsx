import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose, graphql } from 'react-apollo'
import { sendNotification } from '../../actions'
import withIndicator from '../../helpers/withIndicator'
import POST_QUERY from '../../graphql/Post.gql'

type Data = State.Apollo<{
  post: {
    slug: string
    title: string
    description: string
    // # author {
    // #   name
    // #   id
    // # }
    // # tags {
    // #   slug
    // #   name
    // #   id
    // # }
    markdown: string
    visibility: string
    status: string
    image: string
    category: string
    id: string
    objectId: string
    createdAt: string
    updatedAt: string
  }
}>

interface OwnProps {
}

interface StateProps {
  sendNotification: typeof sendNotification
  data: Data
  handleSubmit: any
  mutate: typeof ApolloMutation
}

class PostRenderer extends Component<OwnProps & StateProps, {}> {
  render() {
    const { post } = this.props.data
    return (
      <div>
        <h1>{post.title}</h1>
        <div className="content">
          {post.markdown}
        </div>
      </div>
    )
  }
}

export default compose<{}, {}, {}, OwnProps>(
  connect(
    (state, ownProps) => {
      return {}
    },
    { sendNotification }
  ),
  graphql(POST_QUERY, {
    options: (props) => {
      return {
        variables: {
          id: props.params.id || null,
          slug: props.params.slug || null
        }
      }
    }
  }),
  withIndicator()
)(PostRenderer)
