import React, { Component } from 'react'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import { sendNotification, openModal } from '../../../store/actions'
import * as selectors from '../../../store/selectors'
import Input from '../../../elements/_form/Input'
import Textarea from '../../../elements/_form/Textarea'
import { Button, SelectizeInput} from '../../../elements/_form'
import AddAuthorForm from './AddAuthorForm'
import _ from 'lodash'

interface Props {
  initialData?: any
  onTitleInputChange?: (newVal: string) => void
  onAuthorInputChange?: (newVal: string) => void
  onSaveAuthor: (data: any) => void
  onSaveBook: (data: any) => void
}

interface AllProps extends Props {
  routing: any
  sendNotification: any
  handleSubmit: any
  fields: any
  doubanBooksAsOptions: any[]
  authorsAsOptions: any[]
  openModal: (data: openModal) => void
}

const fields = ['_titleValue', '_titleValues', '_authorValue', '_authorValues', 'cover', 'description', 'content']

@reduxForm({
  form: 'addBook',
  fields
})
class AddBookForm extends Component<AllProps, {}> {

  constructor(props) {
    super(props)
    this.handleTitleOptionClick = this.handleTitleOptionClick.bind(this)
  }

  handleTitleOptionClick(option) {
    const {
      fields: { _titleValue, _titleValues, _authorValue, cover, description },
    } = this.props

    cover.onChange(option.additional.cover)
    _authorValue.onChange(option.additional.author)
    description.onChange(option.additional.description)
  }

  render() {
    const {
      fields: { _titleValue, _titleValues, _authorValue, _authorValues, cover, description, content },
      handleSubmit,
      onTitleInputChange,
      onAuthorInputChange,
      doubanBooksAsOptions,
      authorsAsOptions,
      onSaveAuthor,
      onSaveBook
    } = this.props

    return (
      <div>
        <SelectizeInput
          placeholder="Book title"
          onInputChange={newValue => {
            onTitleInputChange(newValue)
            _titleValue.onChange(newValue)
          } }
          value={_titleValue.value}
          onValuesChange={newValues => {
            _titleValues.onChange(newValues)
          } }
          options={doubanBooksAsOptions}
          values={_titleValues.value || []}
          onOptionClick={this.handleTitleOptionClick}
          />
        <SelectizeInput
          placeholder="Author"
          onInputChange={newValue => {
            onAuthorInputChange(newValue)
            _authorValue.onChange(newValue)
          } }
          value={_authorValue.value}
          onValuesChange={newValues => {
            _authorValues.onChange(newValues)
          } }
          options={authorsAsOptions}
          values={_authorValues.value || []}
          onAddNewValue={value => {
            this.props.openModal({
              title: 'Add Author',
              content: <AddAuthorForm
                initialData={{ name: value }}
                onSave={onSaveAuthor}
                />
            })
          } }
          />
        <Input placeholder="Cover" {...cover} />
        <Textarea placeholder="Description" {...description} />
        <Textarea placeholder="Paste book content here (markdown format)" {...content} />
        <Button onClick={handleSubmit(data => {
          let postData = _.pick(data, ['cover', 'description', 'content'])
          postData = _.assign({}, postData, {
            title: _.get(_titleValues, 'value[0].name', ''),
            authors: Array.isArray(_authorValues.value) ? _authorValues.value.map(v => v.value) : []
          })
          onSaveBook(postData)
        }) }>Add</Button>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const doubanBookQuery = _.get(state.form, 'addBook._titleValue.value', '')
  const authorsQuery = _.get(state.form, 'addBook._authorValue.value', '')

  return {
    initialValues: ownProps.initialData,
    routing: state.routing.locationBeforeTransitions,
    doubanBooksAsOptions: selectors.doubanBooksAsOptions(doubanBookQuery)(state),
    authorsAsOptions: selectors.authorsAsOptions(authorsQuery)(state)
  }
}

export default connect<{}, {}, Props>(
  mapStateToProps,
  { sendNotification, openModal }
)(AddBookForm)
