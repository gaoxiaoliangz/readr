import React, { Component } from 'react'
import _ from 'lodash'
import { Input } from '../../components/form'
import ModalFooter from '../../components/Modal/ModalFooter'
import { reduxForm, Field } from 'redux-form'
import { required, maxLength, minLength } from '../../utils/validators'

interface OwnProps {
  onSave: (data: any) => void
  closeModal: any
}

interface OtherProps {
  fields?: any
  handleSubmit?: any
}

class ChangePWForm extends Component<OwnProps & OtherProps, {}> {
  render() {
    const {
      handleSubmit, closeModal, onSave
    } = this.props

    const pwValidators = [required, maxLength(70), minLength(5)]

    return (
      <div>
        <Field validate={[required]} name="oldPassword" component={Input.Field} type="password" placeholder="原密码" />
        <Field validate={pwValidators} name="newPassword" component={Input.Field} type="password" placeholder="新密码" />
        <Field validate={pwValidators} name="newPasswordAgain" component={Input.Field} type="password" placeholder="重复新密码" />
        <ModalFooter
          onConfirm={handleSubmit(data => {
            onSave(data)
          })}
          onCancel={closeModal}
          />
      </div>
    )
  }
}

export default reduxForm({
  form: 'changePw',
  validate: (values: any) => {
    if (values.newPassword !== values.newPasswordAgain) {
      return {
        newPasswordAgain: '两次输入密码不一致！'
      }
    }
    if (values.newPassword === values.oldPassword) {
      return {
        newPassword: '新密码不能和旧密码一样！'
      }
    }
    return {}
  }
})(ChangePWForm) as React.ComponentClass<OwnProps>
