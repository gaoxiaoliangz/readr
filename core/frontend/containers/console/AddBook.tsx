import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { fetchDoubanBookSearchResults, handleNotification, changeValue } from 'actions/index'
import Input from 'elements/Input'
import Button from 'elements/Button'
import SelectizeInput from 'elements/SelectizeInput'
import Modal from 'elements/Modal'
import _ from 'lodash'
import apis from 'utils/apis'
import getElement_R from 'utils/getElement_R'
import { fetchDoubanBook } from 'utils/apis-third-party'
import InputR from 'elements-wrapped/InputR'
import TextareaR from 'elements-wrapped/TextareaR'


const symbols = {
  inputBookName: Symbol('inputBookName'),
  inputBookAuthor: Symbol('inputBookAuthor'),
  inputAuthorName: Symbol('inputAuthorName'),
  inputAuthorSlug: Symbol('inputAuthorSlug'),
  textareaAuthorDesc: Symbol('textareaAuthorDesc')
}

interface Props {
  elements?: any
  changeValue?: any
  handleNotification?: any
  fetchDoubanBookSearchResults?: any
  doubanBookSearchResults?: any
  doubanBooks?: any
}

interface State {
  dbBookQuery?: string
  bookTitle?: Array<any>
  bookAuthor?: Array<any>
  bookCover?: string
  bookDescription?: string
  bookContent?: string
  isAddAuthorModalVisible?: boolean
  authorName?: string
  authorSlug?: string
  authorDescription?: string

  authorResults?: Array<any>
  optionsOfBookTitle?: Array<any>
  optionsOfBookAuthor?: Array<any>
}

class AddBook extends Component<Props, State> {

  defaultState: {}
  fetchDoubanBookSearchResults: (query: string) => void

  constructor(props) {
    super(props)
    this.defaultState = {
      dbBookQuery: '',
      bookTitle: [],
      bookAuthor: [],
      bookCover: '',
      bookDescription: '',
      bookContent: '',
      authorResults: [],
      isAddAuthorModalVisible: false
    }
    this.state = Object.assign({}, this.defaultState)
    this.fetchDoubanBookSearchResults = _.debounce(this.props.fetchDoubanBookSearchResults, 150)
  }

  addBook(e) {
    e.preventDefault()
    const data = {
      title: this.state.bookTitle.length !== 0 ? this.state.bookTitle[0].value : '',
      description: this.state.bookDescription,
      author: this.state.bookAuthor.map(a => a.value),
      cover: this.state.bookCover,
      content: this.state.bookContent
    }

    apis.addBook(data).then(result => {
      this.props.handleNotification('添加成功')
      this.setState(this.defaultState)
    }, error => {
      this.props.handleNotification(error.message)
    })
  }

  addAuthor() {
    const data = {
      name: this.props.elements[symbols.inputAuthorName].value,
      slug: this.props.elements[symbols.inputAuthorSlug].value,
      description: this.props.elements[symbols.textareaAuthorDesc].value
    }

    apis.addAuthor(data).then(result => {
      this.props.handleNotification('添加成功')
      const id = result.ops[0].id

      this.setState({
        bookAuthor: [...this.state.bookAuthor, { name: data.name, value: id }],
        isAddAuthorModalVisible: false
      })
      this.props.changeValue(symbols.inputBookAuthor, '')
    }, error => {
      this.props.handleNotification(error.message)
    })
  }

  search(query) {
    this.setState({
      dbBookQuery: query
    })
    if (query !== '') {
      fetchDoubanBook(query).then(res => {
        this.setState({
          optionsOfBookTitle: (res as any).books.map(book => ({
            name: book.title,
            value: book.title
          }))
        })
        // console.log(res)
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
          <InputR placeholder="Name" symbol={symbols.inputAuthorName} />
          <InputR placeholder="Slug" symbol={symbols.inputAuthorSlug} />
          <TextareaR
            symbol={symbols.textareaAuthorDesc}
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
            this.search(newValue)
            this.props.changeValue(symbols.inputBookName, newValue)
          }}
          value={getElement_R(this.props.elements, symbols.inputBookName).value}
          onValuesChange={newValues => {
            this.setState({
              bookTitle: newValues
            })
          }}
          options={this.state.optionsOfBookTitle}
          values={this.state.bookTitle}
          onAddNewValue={() => {
          }}
        />

        <SelectizeInput
          placeholder="Book author"
          onInputChange={newValue => {
            this.searchAuthors(newValue)
            this.props.changeValue(symbols.inputBookAuthor, newValue)
          }}
          value={getElement_R(this.props.elements, symbols.inputBookAuthor).value}
          onValuesChange={newValues => {
            this.setState({
              bookAuthor: newValues
            })
          }}
          options={this.state.optionsOfBookAuthor}
          values={this.state.bookAuthor}
          addNewValue={true}
          onAddNewValue={value => {
            this.props.changeValue(symbols.inputAuthorName, value)
            this.props.changeValue(symbols.inputAuthorSlug, value)
            this.props.changeValue(symbols.textareaAuthorDesc, '')
            this.setState({
              isAddAuthorModalVisible: true,
            })
          }}
        />

        <Input
          onChange={event => {
            this.setState({
              bookCover: event.target.value
            })
          }}
          value={this.state.bookCover}
          placeholder="Cover"
        />

        <textarea
          placeholder="Description"
          style={{height: 100}}
          value={this.state.bookDescription}
          onChange={event => {
            this.setState({
              bookDescription: (event.target as HTMLTextAreaElement).value
            })
          }}
        />

        <textarea
          placeholder="Paste book content here"
          style={{height: 100}}
          value={this.state.bookContent}
          onChange={event => {
            this.setState({
              bookContent: (event.target as HTMLTextAreaElement).value
            })
          }}
        />

        <Button onClick={this.addBook.bind(this)}>Add</Button>
      </form>
    )
  }
}

export default connect(
  state => ({
    doubanBookSearchResults: state.pagination.doubanBookSearchResults,
    doubanBooks: state.entities.doubanBooks,
    notification: state.components.notification,
    elements: state.elements
  }),
  {fetchDoubanBookSearchResults, handleNotification, changeValue}
)(AddBook as any)
