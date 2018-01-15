import React, { Component } from 'react'
import { compose } from 'redux'
import { Field, reduxForm } from 'redux-form'
import Input from '../../../components/Input/Input'
import { renderTextarea } from '../../../components/Textarea/Textarea'
import ModalFooter from '../../../components/Modal/ModalFooter'

interface OwnProps {
  onSubmit: any
  initialValues?: any
  closeModal: any
}

interface StateProps {
  fields?: any
  handleSubmit?: any
}

class CategoryForm extends Component<OwnProps & StateProps, {}> {
  render() {
    const {
      handleSubmit, closeModal
    } = this.props

    return (
      <form onSubmit={handleSubmit}>
        <Field placeholder="名称" name="name" component={Input.Field} />
        <Field placeholder="路径" name="slug" component={Input.Field} />
        <Field placeholder="描述" name="description" component={renderTextarea} />
        <ModalFooter
          onCancel={closeModal}
        />
      </form>
    )
  }
}

export default compose(
  reduxForm({
    form: 'category'
  })
)(CategoryForm) as React.ComponentClass<OwnProps>
