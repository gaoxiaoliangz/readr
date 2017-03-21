import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import _ from 'lodash'
import { sendNotification, openModal, closeModal, resetForm, initializeForm } from '../../actions'
import { searchDoubanBooks, loadAuthors } from '../../actions/api'
import webAPI from '../../webAPI'
import DocContainer from '../../components/DocContainer'
import AddBookForm from './components/AddBookForm'

interface Props {
  elements?: any
  changeValue?: any
  sendNotification?: any
  openModal?: (data: openModal) => void
  searchDoubanBooks?: any
  closeModal?: any
  loadAuthors?: typeof loadAuthors
  resetForm?: typeof resetForm
  fetchDoubanBooks: any
  initializeForm?: typeof initializeForm
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
    webAPI.addBook(data).then(result => {
      this.props.sendNotification('添加成功')
      this.props.resetForm('addBook')
    }, error => {
      this.props.sendNotification(error.message, 'error', 0)
    })
  }

  addAuthor(data) {
    webAPI.addAuthor(data).then(result => {
      this.props.sendNotification('添加成功')
      const id = result.json.ops[0]._id
      const name = result.json.ops[0].name
      this.props.initializeForm('addBook', {
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

  handleAuthorValueChange(keyword) {
    if (!_.isEmpty(keyword)) {
      this.props.loadAuthors(1, keyword)
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
  { sendNotification, openModal, searchDoubanBooks, closeModal, loadAuthors, resetForm, initializeForm }
)(AddBook as any)
