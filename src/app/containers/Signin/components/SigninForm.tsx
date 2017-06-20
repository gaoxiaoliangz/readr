import React, { Component } from 'react'
import { connect } from 'react-redux'
import form from '@gxl/redux-form'
import { sendNotification } from '../../../actions'
import { Input, Button } from '../../../components/form'
import validation from '../../../utils/validation'

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

@form({
  form: 'signin',
  fields: ['login', 'password'],
  validate: values => {
    return validation(values)
  }
})
class SigninForm extends Component<AllProps, State> {

  constructor(props) {
    super(props)
    this._submit = this._submit.bind(this)
    this._handleKeyDown = this._handleKeyDown.bind(this)
  }

  _submit() {
    const {
      handleSubmit,
      onSave
    } = this.props

    handleSubmit(onSave)()
  }

  _handleKeyDown(e) {
    if (e.key === 'Enter') {
      this._submit()
    }
  }

  render() {
    const {
      fields: { login, password }
    } = this.props

    return (
      <div>
        <Input onKeyDown={this._handleKeyDown} placeholder="用户名/邮箱" {...login} />
        <Input onKeyDown={this._handleKeyDown} placeholder="密码" type="password" {...password} />
        <Button
          color="blue"
          onClick={this._submit}>登录</Button>
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
