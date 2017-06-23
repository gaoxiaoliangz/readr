import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose, graphql } from 'react-apollo'
import { sendNotification } from '../../actions'
import ADD_POST_MUTATION from '../../graphql/mutations/AddPost.gql'
// import withIndicator from '../../helpers/withIndicator'
import { Field, reduxForm } from 'redux-form'
import Input from '../../components/Input/Input'
import AddPostForm from './AddPostForm'

type Data = State.Apollo<{
}>

interface OwnProps {
}

interface StateProps {
  sendNotification: typeof sendNotification
  data: Data
  handleSubmit: any
}

class AddPost extends Component<OwnProps & StateProps, {}> {

  constructor(props) {
    super(props)
    this._handleSubmit = this._handleSubmit.bind(this)
  }

  _handleSubmit(values) {
    // this.props.data.
    console.log(values)
    return false
  }

  render() {
    return (
      <AddPostForm onSubmit={this._handleSubmit} />
    )
  }
}

const withMut = graphql(ADD_POST_MUTATION, {
  options: (props: OwnProps) => {
    return {
      variables: {}
    }
  }
})

// export default compose<{}, {}, OwnProps>(
//   // withMut,
//   connect(
//     (state, ownProps) => {
//       return {}
//     },
//     { sendNotification }
//   ),
//   reduxForm({
//     // a unique name for the form
//     form: 'addPost'
//   })
//   // withIndicator()
// )(AddPost)

export default reduxForm({
  form: 'addPost'
})(AddPost)
