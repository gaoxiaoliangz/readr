import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { sendNotification, changeValue } from '../../store/actions'
import { Button, SelectizeInput} from '../../elements/_form'
import Modal from '../../elements/Modal'
import _ from 'lodash'
import apis from '../../apis'
import RInput from '../../elements/_wrapped/RInput'
import RTextarea from '../../elements/_wrapped/RTextarea'

const fetchDoubanBooks = apis.fetchDoubanBooks

const syls = {
  inputBookName: Symbol('inputBookName'),
  inputBookAuthor: Symbol('inputBookAuthor'),
  inputAuthorName: Symbol('inputAuthorName'),
  inputAuthorSlug: Symbol('inputAuthorSlug'),
  inputBookCover: Symbol('inputBookCover'),
  textareaAuthorDesc: Symbol('textareaAuthorDesc'),
  textareaBookDesc: Symbol('textareaBookDesc'),
  textareaBookContent: Symbol('textareaBookContent')
}

interface Props {
  elements?: any
  changeValue?: any
  sendNotification?: any
}

interface State {
  bookTitle?: Array<any>
  bookAuthor?: Array<any>
  isAddAuthorModalVisible?: boolean
  optionsOfBookTitle?: Array<any>
  optionsOfBookAuthor?: Array<any>
}

class AddBook extends Component<Props, State> {

  defaultState: {}
  fetchDoubanBooks: any

  constructor(props) {
    super(props)
    this.defaultState = {
      bookTitle: [],
      bookAuthor: [],
      authorResults: [],
      isAddAuthorModalVisible: false
    }
    this.state = Object.assign({}, this.defaultState)

    // todo
    // this.fetchDoubanBooks = _.debounce(fetchDoubanBooks, 150)
  }

  resetForm() {
    this.props.changeValue(syls.inputBookCover, '')
    this.props.changeValue(syls.textareaBookDesc, '')
    this.props.changeValue(syls.textareaBookContent, '')
    this.setState(this.defaultState)
  }

  addBook() {
    const data = {
      title: this.state.bookTitle.length !== 0 ? this.state.bookTitle[0].value : '',
      authors: this.state.bookAuthor.map(a => a.value),
      description: this.props.elements[syls.textareaBookDesc].value,
      cover: this.props.elements[syls.inputBookCover].value,
      content: this.props.elements[syls.textareaBookContent].value
    }

    apis.addBook(data).then(result => {
      this.props.sendNotification('添加成功')
      this.resetForm()
    }, error => {
      this.props.sendNotification(error.message)
    })
  }

  addAuthor() {
    const data = {
      name: this.props.elements[syls.inputAuthorName].value,
      slug: this.props.elements[syls.inputAuthorSlug].value,
      description: this.props.elements[syls.textareaAuthorDesc].value
    }

    apis.addAuthor(data).then(result => {
      this.props.sendNotification('添加成功')
      const id = result.ops[0].id

      this.setState({
        bookAuthor: [...this.state.bookAuthor, { name: data.name, value: id }],
        isAddAuthorModalVisible: false
      })
      this.props.changeValue(syls.inputBookAuthor, '')
    }, error => {
      this.props.sendNotification(error.message)
    })
  }

  searchBooks(query) {
    if (query !== '') {
      fetchDoubanBooks(query).then(res => {
        this.setState({
          optionsOfBookTitle: (res as any).books.map(book => ({
            name: book.title,
            value: book.title,
            additional: {
              description: book.summary,
              cover: book.images.large,
              author: book.author.join(', ')
            }
          }))
        })
      })
    }
  }

  searchAuthors(query) {
    if (query !== '') {
      apis.searchAuthors(query).then(response => {
        this.setState({
          optionsOfBookAuthor: response.map(r => ({
            name: r.name,
            value: r.id
          }))
        })
      })
    } else {
      this.setState({
        optionsOfBookAuthor: []
      })
    }
  }

  render() {
    return (
      <form>
        <Modal
          width={600}
          isVisible={this.state.isAddAuthorModalVisible}
          onRequestClose={() => {
            this.setState({
              isAddAuthorModalVisible: false
            })
          }}
        >
          <h1 className="page-title" style={{marginTop: 0}}>Add author</h1>
          <RInput placeholder="Name" symbol={syls.inputAuthorName} />
          <RInput placeholder="Slug" symbol={syls.inputAuthorSlug} />
          <RTextarea
            symbol={syls.textareaAuthorDesc}
            placeholder="Description"
          />
          <Button onClick={e => {
            e.preventDefault()
            this.addAuthor()
          }}>Add</Button>
        </Modal>

        <h1 className="page-title">Add Book</h1>
        <SelectizeInput
          placeholder="Book title"
          onInputChange={newValue => {
            this.searchBooks(newValue)
            this.props.changeValue(syls.inputBookName, newValue)
          }}
          value={_.get(this.props.elements[syls.inputBookName], 'value', '')}
          onValuesChange={newValues => {
            this.setState({
              bookTitle: newValues
            })
          }}
          options={this.state.optionsOfBookTitle}
          values={this.state.bookTitle}
          onAddNewValue={() => {
            // todo
          }}
          onOptionClick={option => {
            this.props.changeValue(syls.inputBookCover, option.additional.cover)
            this.props.changeValue(syls.inputBookAuthor, option.additional.author)
            this.props.changeValue(syls.textareaBookDesc, option.additional.description)
          }}
        />

        <SelectizeInput
          placeholder="Book author"
          onInputChange={newValue => {
            this.searchAuthors(newValue)
            this.props.changeValue(syls.inputBookAuthor, newValue)
          }}
          value={_.get(this.props.elements[syls.inputBookAuthor], 'value', '')}
          onValuesChange={newValues => {
            this.setState({
              bookAuthor: newValues
            })
          }}
          options={this.state.optionsOfBookAuthor}
          values={this.state.bookAuthor}
          addNewValue={true}
          onAddNewValue={value => {
            this.props.changeValue(syls.inputAuthorName, value)
            // todo
            this.props.changeValue(syls.inputAuthorSlug, value)
            this.props.changeValue(syls.textareaAuthorDesc, '')
            this.setState({
              isAddAuthorModalVisible: true,
            })
          }}
        />

        <RInput placeholder="Cover" symbol={syls.inputBookCover} />
        <RTextarea placeholder="Description" symbol={syls.textareaBookDesc} />
        <RTextarea placeholder="Paste book content here" symbol={syls.textareaBookContent} />

        <Button onClick={e => {
          e.preventDefault()
          this.addBook()}}>Add</Button>
      </form>
    )
  }
}

export default connect(
  state => ({
    notification: state.components.notification,
    elements: state.elements
  }),
  { sendNotification, changeValue}
)(AddBook as any)
