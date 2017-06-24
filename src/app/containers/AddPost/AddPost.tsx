import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose, graphql } from 'react-apollo'
import { sendNotification } from '../../actions'
import ADD_POST_MUTATION from '../../graphql/mutations/AddPost.gql'
// import withIndicator from '../../helpers/withIndicator'
import AddPostForm from './AddPostForm'

type Data = State.Apollo<{
}>

interface OwnProps {
}

interface StateProps {
  sendNotification: typeof sendNotification
  data: Data
  handleSubmit: any
  mutate: any
}

class AddPost extends Component<OwnProps & StateProps, {}> {

  constructor(props) {
    super(props)
    this._handleSubmit = this._handleSubmit.bind(this)
  }

  _handleSubmit(values) {
    this.props.mutate({
      variables: values
    })
      .then(data => {
        this.props.sendNotification('done')
      })
      .catch((err) => {
        this.props.sendNotification(err.message, 'error')
      })
  }

  render() {
    return (
      <AddPostForm onSubmit={this._handleSubmit} />
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
  // withIndicator()
)(AddPost)
