import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { searchBooks } from 'actions'
import Input from 'elements/Input'
import Button from 'elements/Button'
import AddTags from 'elements/AddTags'

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

  check() {
    console.log(this.refs.addBooks.state)
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
          bookQueryResults: this.getCurrentSearchResults().map(item => item.title)
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
    return (
      <form>
        <h1 className="page-title">Add book list</h1>
        <Input placeholder="Name" />
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
        <textarea placeholder="Description" />
        <Button onClick={this.check.bind(this)}>Check</Button>
      </form>
    )
  }
}

function mapStateToProps(state) {
  return {
    bookSearchResults: state.pagination.bookSearchResults,
    books: state.entities.books
  }
}

export default connect(
  mapStateToProps,
  { searchBooks }
)(AddBookList)
