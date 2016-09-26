import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { reset } from 'redux-form'
import { sendNotification, changeValue, openModal, searchDoubanBooks, closeModal, fetchAuthors } from '../../store/actions'
import _ from 'lodash'
import apis from '../../apis'
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
  reset?: any
}

interface State {
  addBookFormInitialData?: any
}

class AddBook extends Component<Props, State> {

  defaultState: {}
  fetchDoubanBooks: any

  constructor(props) {
    super(props)
    this.state = {
      addBookFormInitialData: {}
    }

    this.handleTitleValueChange = this.handleTitleValueChange.bind(this)
    this.handleAuthorValueChange = this.handleAuthorValueChange.bind(this)
    this.addAuthor = this.addAuthor.bind(this)
    this.addBook = this.addBook.bind(this)
  }

  addBook(data) {
    apis.addBook(data).then(result => {
      this.props.sendNotification('添加成功')
      this.props.reset('addBook')
      this.setState({
        addBookFormInitialData: {}
      })
    }, error => {
      this.props.sendNotification(error.message, 'error')
    })
  }

  addAuthor(data) {
    apis.addAuthor(data).then(result => {
      this.props.sendNotification('添加成功')
      const id = result.json.ops[0]._id
      const name = result.json.ops[0].name

      this.setState({
        addBookFormInitialData: {
          _authorValues: [{
            name: name,
            value: id
          }],
          _authorValue: ''
        }
      })

      this.props.closeModal()
    }, error => {
      this.props.sendNotification(error.message)
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
          initialData={this.state.addBookFormInitialData}
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
  { sendNotification, changeValue, openModal, searchDoubanBooks, closeModal, fetchAuthors, reset }
)(AddBook as any)
