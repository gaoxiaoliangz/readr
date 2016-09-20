import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { sendNotification, changeValue, openModal, searchDoubanBooks } from '../../store/actions'
import { Button, SelectizeInput} from '../../elements/_form'
import Modal from '../../elements/Modal'
import _ from 'lodash'
import apis from '../../apis'
import RInput from '../../elements/_wrapped/RInput'
import RTextarea from '../../elements/_wrapped/RTextarea'
import DocContainer from '../../containers/DocContainer'
import AddAuthorForm from './components/AddAuthorForm'
import AddBookForm from './components/AddBookForm'
import { createSelector } from 'reselect'


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
  openModal?: (data: openModal) => void
  searchDoubanBooks?: any
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
    this.handleTitleValueChange = this.handleTitleValueChange.bind(this)
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

  handleTitleValueChange(newVal) {
    if (!_.isEmpty(newVal)) {
      this.props.searchDoubanBooks(newVal)
    }
  }

  render() {
    return (
      <DocContainer title="添加书籍">
        <h1 className="page-title">Add Book</h1>
        <AddBookForm
          onTitleInputChange={this.handleTitleValueChange}
        />
      </DocContainer>
    )
  }
}

const mapStateToProps = state => {
  return {
    notification: state.components.notification,
    elements: state.elements
  }
}

export default connect(
  mapStateToProps,
  { sendNotification, changeValue, openModal, searchDoubanBooks }
)(AddBook as any)
