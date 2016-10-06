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
import getFormValues from '../../../helpers/getFormValues'

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

    const selectedAuthorIds = (_authorValues.value || []).map(author => author.value)
    const filteredAuthorOptions = authorsAsOptions.filter(author => {
      return selectedAuthorIds.indexOf(author.value) === -1
    })

    return (
      <div>
        <SelectizeInput
          placeholder="书名"
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
          placeholder="作者"
          onInputChange={newValue => {
            onAuthorInputChange(newValue)
            _authorValue.onChange(newValue)
          } }
          value={_authorValue.value}
          onValuesChange={newValues => {
            _authorValues.onChange(newValues)
          } }
          options={filteredAuthorOptions}
          values={_authorValues.value || []}
          onAddNewValue={value => {
            this.props.openModal({
              title: '添加作者',
              content: <AddAuthorForm
                initialData={{ name: value }}
                onSave={onSaveAuthor}
                />
            })
          } }
          />
        <Input placeholder="封面图片地址" {...cover} />
        <Textarea placeholder="描述" {...description} />
        <Textarea placeholder="在此粘贴书籍内容 (markdown 格式)" {...content} />
        <Button onClick={handleSubmit(data => {
          let postData = _.pick(data, ['cover', 'description', 'content'])
          postData = _.assign({}, postData, {
            title: _.get(_titleValues, 'value[0].name', ''),
            authors: Array.isArray(_authorValues.value) ? _authorValues.value.map(v => v.value) : []
          })
          onSaveBook(postData)
        }) }>添加</Button>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const form = _.get(state.form, 'addBook', {})
  const formData = getFormValues(form, fields)

  return {
    initialValues: Object.assign({}, formData, ownProps.initialData),
    routing: state.routing.locationBeforeTransitions,
    doubanBooksAsOptions: selectors.doubanBooksAsOptions('search')(state),
    authorsAsOptions: selectors.authorsAsOptions('search')(state)
  }
}

export default connect<{}, {}, Props>(
  mapStateToProps,
  { sendNotification, openModal }
)(AddBookForm)
