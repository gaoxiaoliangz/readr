import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { sendNotification, openModal, searchDoubanBooks, closeModal, fetchAuthors, reset, initialize } from '../../store/actions'
import _ from 'lodash'
import api from '../../services/api'
import DocContainer from '../../containers/DocContainer'
import AddBookForm from './components/AddBookForm'

interface Props {
  elements?: any
  changeValue?: any
  sendNotification?: any
  openModal?: (data: openModal) => void
  searchDoubanBooks?: any
  closeModal?: any
  fetchAuthors?: any
  reset?: typeof reset
  fetchDoubanBooks: any
  initialize?: typeof initialize
}

class AddBook extends Component<Props, {}> {

  defaultState: {}
  fetchDoubanBooks: any

  constructor(props) {
    super(props)
    this.state = {
      slData: {
        author: {}
      }
    }

    this.handleTitleValueChange = this.handleTitleValueChange.bind(this)
    this.handleAuthorValueChange = this.handleAuthorValueChange.bind(this)
    this.addAuthor = this.addAuthor.bind(this)
    this.addBook = this.addBook.bind(this)
  }

  addBook(data) {
    api.addBook(data).then(result => {
      this.props.sendNotification('添加成功')
      this.props.reset('addBook')
    }, error => {
      this.props.sendNotification(error.message, 'error', 0)
    })
  }

  addAuthor(data) {
    api.addAuthor(data).then(result => {
      this.props.sendNotification('添加成功')
      const id = result.json.ops[0]._id
      const name = result.json.ops[0].name
      this.props.initialize('addBook', {
        authors: [{
          name: name,
          value: id
        }],
        author: ''
      })
      this.props.closeModal()
    }, error => {
      this.props.sendNotification(error.message, 'error')
    })
  }

  handleAuthorValueChange(query) {
    if (!_.isEmpty(query)) {
      this.props.fetchAuthors({
        q: query
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
        <h1 className="page-title">添加书籍</h1>
        <AddBookForm
          onTitleInputChange={this.handleTitleValueChange}
          onAuthorInputChange={this.handleAuthorValueChange}
          onSaveAuthor={this.addAuthor}
          onSaveBook={this.addBook}
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
  { sendNotification, openModal, searchDoubanBooks, closeModal, fetchAuthors, reset, initialize }
)(AddBook as any)
