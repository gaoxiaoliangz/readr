import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { Field, reduxForm } from 'redux-form'
import { sendNotification, closeModal } from '../../../actions'
import { renderInput } from '../../../components/Input/Input'
import { renderTextarea } from '../../../components/Textarea/Textarea'
import ModalFooter from '../../../components/Modal/ModalFooter'
import SelectizeInput from '../../../components/SelectizeInput/SelectizeInput'

interface OwnProps {
  onSubmit: any
  initialValues?: any
  authors: Schema.Connection<Schema.Author>
  categories: Schema.Connection<Schema.Category>
}

interface StateProps {
  fields?: any
  handleSubmit?: any
}

interface DispatchProps {
  sendNotification?: typeof sendNotification
  closeModal?: typeof closeModal
}

export const renderSeInput = (options) => ({ input: { value, onChange }, meta, ...rest }) => {
  return (
    <SelectizeInput
      {...rest}
      value=""
      onInputChange={() => {
      }}
      values={value || []}
      onValuesChange={onChange}
      options={options}
    />
  )
}

const mapOptions = edge => {
  return {
    name: edge.node.name,
    value: edge.node.id,
  }
}

class BookMetaForm extends Component<OwnProps & StateProps & DispatchProps, {}> {
  render() {
    const {
      handleSubmit, closeModal
    } = this.props
    const authorOptions = this.props.authors.edges.map(mapOptions)
    const categoriesOptions = this.props.categories.edges.map(mapOptions)

    return (
      <form onSubmit={handleSubmit}>
        <Field placeholder="书名" name="title" component={renderInput} />
        <Field placeholder="作者" name="authors" component={renderSeInput(authorOptions)} />
        <Field placeholder="封面" name="cover" component={renderInput} />
        <Field placeholder="分类" name="categories" component={renderSeInput(categoriesOptions)} />
        <Field placeholder="描述" name="description" component={renderTextarea} />
        <ModalFooter
          onCancel={closeModal}
        />
      </form>
    )
  }
}

export default compose(
  connect(
    null,
    { sendNotification, closeModal }
  ),
  reduxForm({
    form: 'bookMeta'
  })
)(BookMetaForm) as React.ComponentClass<OwnProps>
