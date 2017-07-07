import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { reduxForm, Field } from 'redux-form'
import { sendNotification } from '../../../actions'
import { Button } from '../../../components/form'
import Input from '../../../components/Input/Input'
import { required, maxLength, minLength } from '../../../utils/validators'

interface OwnProps {
  initialValues?: any
  onSave: (data: any) => void
}

interface StateProps {
  routing: any
  sendNotification: any
  handleSubmit: any
  fields: any
}

class SigninForm extends Component<StateProps & OwnProps, void> {
  _submit = () => {
    const {
      handleSubmit,
      onSave
    } = this.props

    handleSubmit(onSave)()
  }

  _handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      this._submit()
    }
  }

  render() {
    const {
      handleSubmit
    } = this.props

    return (
      <form onSubmit={handleSubmit}>
        <Field
          placeholder="用户名/邮箱"
          name="login"
          component={Input.Field}
          type="text"
          validate={[required, maxLength(70), minLength(5)]}
          onKeyDown={this._handleKeyDown}
        />
        <Field
          placeholder="密码"
          name="password"
          type="password"
          component={Input.Field}
          validate={[required, maxLength(70), minLength(6)]}
          onKeyDown={this._handleKeyDown}
        />
        <Button
          color="blue"
          type="submit"
          onClick={this._submit}>登录</Button>
      </form>
    )
  }
}

export default compose(
  reduxForm({
    form: 'signin'
  }),
  connect(
    (state, ownProps: OwnProps) => {
      return {
        initialValues: ownProps.initialValues,
        routing: state.routing.locationBeforeTransitions
      }
    },
    { sendNotification }
  ),
)(SigninForm as any) as React.ComponentClass<OwnProps>
