import React, { Component } from 'react'
import { connect } from 'react-redux'
import { form } from '../../../form'
import { sendNotification, openModal, initialize } from '../../../store/actions'
import * as selectors from '../../../store/selectors'
import Input from '../../../elements/_form/Input'
import Textarea from '../../../elements/_form/Textarea'
import { Button, SelectizeInput } from '../../../elements/_form'
import AddAuthorForm from './AddAuthorForm'
import _ from 'lodash'

interface Props {
  onTitleInputChange?: (newVal: string) => void
  onAuthorInputChange?: (newVal: string) => void
  onSaveAuthor: (data: any) => void
  onSaveBook: (data: any) => void
  initialize?: initialize
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

@form({
  form: 'addBook',
  fields: ['title', 'author', 'authors', 'cover', 'description', 'content']
})
class AddBookForm extends Component<AllProps, {}> {

  constructor(props) {
    super(props)
    this.handleTitleOptionClick = this.handleTitleOptionClick.bind(this)
    this.handleAddNewAuthor = this.handleAddNewAuthor.bind(this)
  }

  handleTitleOptionClick(option) {
    const data = {
      cover: option.additional.cover,
      description: option.additional.description,
      author: option.additional.author
    }
    this.props.initialize('addBook', data)
    this.setState({
      slAuthor: {
        value: option.additional.author,
        values: []
      }
    })
  }

  handleAddNewAuthor(value) {
    this.props.openModal({
      title: '添加作者',
      content: <AddAuthorForm
        onSave={this.props.onSaveAuthor}
        />
    })
    this.props.initialize('addAuthor', { name: value })
  }

  render() {
    const {
      fields: {
        title, author, authors, cover, description, content
      },
      handleSubmit,
      onTitleInputChange,
      onAuthorInputChange,
      doubanBooksAsOptions,
      authorsAsOptions,
      onSaveBook,
    } = this.props

    const selectedAuthorIds = authors.get([]).map(a => a.value)
    const filteredAuthorOptions = authorsAsOptions.filter(a => {
      return selectedAuthorIds.indexOf(a.value) === -1
    })

    return (
      <div>
        <SelectizeInput
          placeholder="书名"
          value={title.value}
          values={[]}
          options={doubanBooksAsOptions}
          onInputChange={newValue => {
            onTitleInputChange(newValue)
            title.set(newValue)
          } }
          useValue
          onOptionClick={this.handleTitleOptionClick}
          />
        <SelectizeInput
          placeholder="作者"
          value={author.get()}
          values={authors.get([])}
          options={filteredAuthorOptions}
          onInputChange={newValue => {
            onAuthorInputChange(newValue)
            author.set(newValue)
          } }
          onValuesChange={authors.onChange}
          onAddNewValue={this.handleAddNewAuthor}
          />
        <Input placeholder="封面图片地址" {...cover} />
        <Textarea placeholder="描述" {...description} />
        <Textarea placeholder="在此粘贴书籍内容 (markdown 格式)" {...content} />

        <Button onClick={handleSubmit(data => {
          const postData = _.omit(data, ['author'])
          postData['authors'] = _.map(postData['authors'], 'value')
          onSaveBook(postData)
        })}>添加</Button>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    routing: state.routing.locationBeforeTransitions,
    doubanBooksAsOptions: selectors.doubanBooksAsOptions('search')(state),
    authorsAsOptions: selectors.authorsAsOptions('search')(state),
  }
}

export default connect<{}, {}, Props>(
  mapStateToProps,
  { sendNotification, openModal, initialize }
)(AddBookForm)
