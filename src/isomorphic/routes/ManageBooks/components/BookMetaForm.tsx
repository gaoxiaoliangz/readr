import React, { Component } from 'react'
import { connect } from 'react-redux'
import form from 'better-redux-form'
import { sendNotification, closeModal } from '../../../store/actions'
import Input from '../../../elements/Input'
import ModalFooter from '../../../elements/Modal/ModalFooter'

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
  form: 'bookMeta',
  fields: ['title', 'authors', 'description', 'cover']
})
class BookMetaForm extends Component<AllProps, {}> {

  constructor(props) {
    super(props)
  }

  render() {
    const {
      fields: { title, authors, description, cover },
      handleSubmit, closeModal, onSave
    } = this.props

    return (
      <div>
        <Input placeholder="书名" {...title} />
        <Input placeholder="作者" {...authors} />
        <Input placeholder="描述" {...description} />
        <Input placeholder="封面" {...cover} />
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
)(BookMetaForm)
