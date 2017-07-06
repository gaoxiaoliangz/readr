import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose, graphql } from 'react-apollo'
import { sendNotification } from '../../actions'
import UPDATE_POST_MUTATION from '../../graphql/mutations/UpdatePost.gql'
import withIndicator from '../../helpers/withIndicator'
import POSTS_QUERY from '../../graphql/Posts.gql'
import POST_QUERY from '../../graphql/Post.gql'
import PostForm from './PostForm'

type Data = State.Apollo<{
  post: any
}>

interface OwnProps {
}

interface StateProps {
  sendNotification: typeof sendNotification
  data: Data
  handleSubmit: any
  mutate: typeof ApolloMutation
}

class EditPost extends Component<OwnProps & StateProps, {}> {

  constructor(props) {
    super(props)
    this._handleSubmit = this._handleSubmit.bind(this)
  }

  _handleSubmit(values) {
    this.props.mutate({
      variables: values,
      refetchQueries: [
        {
          query: POSTS_QUERY,
          variables: {
            first: 5
          }
        }
      ]
    })
      .then(data => {
        this.props.sendNotification('更新成功！')
      })
      .catch((err) => {
        this.props.sendNotification(err.message, 'error')
      })
  }

  render() {
    return (
      <PostForm
        onSubmit={this._handleSubmit}
        initialValues={this.props.data.post}
      />
    )
  }
}

export default compose<{}, {}, {}, {}, OwnProps>(
  connect(
    (state, ownProps) => {
      return {}
    },
    { sendNotification }
  ),
  graphql(UPDATE_POST_MUTATION),
  graphql(POST_QUERY, {
    options: (props) => {
      return {
        variables: {
          id: props.params.id
        }
      }
    }
  }),
  withIndicator()
)(EditPost)
