import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { searchBooks, handleNotification } from 'actions'
import Input from 'elements/Input'
import Button from 'elements/Button'
import AddTags from 'elements/AddTags'
import Notification from 'components/Notification'
import * as data from 'utils/data'

class AddBookList extends Component{

  constructor(props) {
    super(props)
    this.state = {
      booksToAdd: '',
      tagsToAdd: '',
      bookQueryResults: []
    }
  }

  getCurrentSearchResults() {
    let query = this.state.booksToAdd
    let books = this.props.books

    return this.props.bookSearchResults?this.props.bookSearchResults[query].ids.map((id, index) => {
      return books[id]
    }):[]
  }

  add(e) {
    let books = JSON.stringify(this.refs.addBooks.state.tags.map(tag => (tag.key)))
    let name = ReactDOM.findDOMNode(this.refs.name).querySelector('input').value
    let description = ReactDOM.findDOMNode(this.refs.description).value

    data.addBookList(name, books, description).then(result => {
      this.props.handleNotification('添加成功')
    }, error => {
      this.props.handleNotification(error.message)
    })
    e.preventDefault()
  }

  resetBooksValue() {
    this.setState({
      booksToAdd: ''
    })
  }

  resetTagsValue() {
    this.setState({
      tagsToAdd: ''
    })
  }

  handleAddBook(event) {
    let query = event.target.value
    this.setState({
      booksToAdd: query
    })

    if(query !== '') {
      this.props.searchBooks(query).then(() => {
        this.setState({
          bookQueryResults: this.getCurrentSearchResults().map(item => ({text: item.title, key: item.id}))
        })
      })
    }else{
      this.setState({
        bookQueryResults: []
      })
    }
  }

  handleAddTag(event) {
    this.setState({
      tagsToAdd: event.target.value
    })
  }

  componentDidMount() {

  }

  render(){
    let notification = this.props.notification

    return (
      <form>
        <Notification notification={notification} />
        <h1 className="page-title">Add book list</h1>
        <Input ref="name" placeholder="Name" />
        <AddTags
          className="add-books"
          value={this.state.booksToAdd}
          onChange={this.handleAddBook.bind(this)}
          ref="addBooks"
          queryResults={this.state.bookQueryResults}
          resetValue={this.resetBooksValue.bind(this)}
          placeholder="Type book name to begin"
        />
        <AddTags
          className="add-tags"
          value={this.state.tagsToAdd}
          onChange={this.handleAddTag.bind(this)}
          ref="addTags"
          queryResults={['tag1', 'tag2', 'uoeuoi', 'eoioie']}
          resetValue={this.resetTagsValue.bind(this)}
          placeholder="Tags"
        />
        <textarea ref="description" placeholder="Description" />
        <Button onClick={this.add.bind(this)}>Add</Button>
      </form>
    )
  }
}

function mapStateToProps(state) {
  return {
    bookSearchResults: state.pagination.bookSearchResults,
    books: state.entities.books,
    notification: state.components.notification
  }
}

export default connect(
  mapStateToProps,
  { searchBooks, handleNotification }
)(AddBookList)
