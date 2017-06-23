import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { compose } from 'redux'
import { compose, graphql } from 'react-apollo'
import { sendNotification } from '../../actions'
// import withIndicator from '../../helpers/withIndicator'
import { Field, reduxForm } from 'redux-form'
import Input from '../../components/Input/Input'

type Data = State.Apollo<{
}>

interface OwnProps {
  onSubmit: any
}

interface StateProps {
  sendNotification: typeof sendNotification
  data: Data
  handleSubmit: any
}

const renderInput = ({ input: { value, onChange } }) => {
  return (
    <Input value={value} onChange={onChange} />
  )
}

class AddPostForm extends Component<OwnProps & StateProps, {}> {

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
    const { handleSubmit } = this.props
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name</label>
          <Field name="firstName" component={renderInput} type="text" />
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <Field name="lastName" component={renderInput} type="text" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <Field name="email" component={renderInput} type="email" />
        </div>
        <button type="submit">Submit</button>
      </form>
    )
  }
}

export default reduxForm<{}, OwnProps, {}>({
  form: 'addPost'
})(AddPostForm) as any

// export default compose<{}, OwnProps>(
//   connect(
//     () => ({})
//   ),
//   reduxForm({
//     form: 'addPost'
//   })
// )(AddPostForm)
