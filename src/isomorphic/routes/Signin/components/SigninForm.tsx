import React, { Component } from 'react'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import { sendNotification } from '../../../store/actions'
import { Input, Button } from '../../../elements/_form'
import validation from '../../../data/validation'

interface Props {
  initialValues?: any
  onSave: (data: any) => void
}

interface AllProps extends Props {
  routing: any
  sendNotification: any
  handleSubmit: any
  fields: any
}

interface State {
}

@reduxForm({
  form: 'formName',
  fields: ['login', 'password'],
  validate: values => {
    return validation(values)
  }
})
class SigninForm extends Component<AllProps, State> {

  constructor(props) {
    super(props)
  }

  render() {
    const {
      fields: { login, password },
      handleSubmit,
      onSave
    } = this.props

    return (
      <div>
        <Input placeholder="用户名/邮箱" {...login} />
        <Input placeholder="密码" type="password" {...password} />
        <Button
          color="blue"
          onClick={handleSubmit(data => {
            onSave(data)
          })}>登录</Button>
      </div>
    )
  }
}

export default connect<{}, {}, Props>(
  (state, ownProps) => {
    return {
      initialValues: ownProps.initialValues,
      routing: state.routing.locationBeforeTransitions
    }
  },
  { sendNotification }
)(SigninForm)
