import React, { Component } from 'react'
import { connect } from 'react-redux'
import form from 'better-redux-form'
import { sendNotification, closeModal } from '../../../actions'
import Input from '../../../components/Input'
import ModalFooter from '../../../components/Modal/ModalFooter'

interface Props {
  onSave: (data: any) => void
}

interface AllProps extends Props {
  sendNotification: any
  handleSubmit: any
  fields: any
  closeModal: () => void
}

@form({
  form: 'addAuthor',
  fields: ['name', 'slug', 'description']
})
class AddAuthorForm extends Component<AllProps, {}> {

  constructor(props) {
    super(props)
  }

  render() {
    const {
      fields: { name, slug, description },
      handleSubmit, closeModal, onSave
    } = this.props

    return (
      <div>
        <Input placeholder="名字" {...name} />
        <Input placeholder="唯一标识" {...slug} />
        <Input placeholder="描述" {...description} />
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

export default connect<{}, {}, Props>(
  state => state,
  { sendNotification, closeModal }
)(AddAuthorForm)
