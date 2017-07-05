import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose, graphql } from 'react-apollo'
import { sendNotification } from '../../actions'
import ADD_POST_MUTATION from '../../graphql/mutations/AddPost.gql'
import POSTS_QUERY from '../../graphql/Posts.gql'
import PostForm from './PostForm'

type Data = State.Apollo<{
}>

interface OwnProps {
}

interface StateProps {
  sendNotification: typeof sendNotification
  data: Data
  handleSubmit: any
  mutate: typeof ApolloMutation
}

class AddPost extends Component<OwnProps & StateProps, {}> {

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
        this.props.sendNotification('添加成功！')
      })
      .catch((err) => {
        this.props.sendNotification(err.message, 'error')
      })
  }

  render() {
    return (
      <PostForm onSubmit={this._handleSubmit} />
    )
  }
}

export default compose<{}, {}, OwnProps>(
  graphql(ADD_POST_MUTATION),
  connect(
    (state, ownProps) => {
      return {}
    },
    { sendNotification }
  )
)(AddPost)
