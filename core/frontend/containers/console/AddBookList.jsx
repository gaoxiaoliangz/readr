import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { someAction } from 'actions'
import Input from 'elements/Input'
import AddTags from 'elements/AddTags'

class AddBookList extends Component{

  static fetchData({store, params}) {
    return store.dispatch(fetch())
  }

  constructor(props) {
    super(props)
    this.state = {
      booksToAdd: '',
      tagsToAdd: ''
    }
  }

  check() {
    console.log(this.refs.addTags.state)
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
    this.setState({
      booksToAdd: event.target.value
    })
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
        <AddTags className="add-books" value={this.state.booksToAdd} onChange={this.handleAddBook.bind(this)} ref="addBooks" queryResults={['abc', 'bcd', 'uoeuoi', 'eoioie']} resetValue={this.resetBooksValue.bind(this)} placeholder="Type book name to begin" />
        <AddTags className="add-tags" value={this.state.tagsToAdd} onChange={this.handleAddTag.bind(this)} ref="addTags" queryResults={['tag1', 'tag2', 'uoeuoi', 'eoioie']} resetValue={this.resetTagsValue.bind(this)} placeholder="Tags" />
        <textarea placeholder="Description" />
        <span className="btn" onClick={this.check.bind(this)}>Check</span>
      </form>
    )
  }
}

export default connect(
  state => ({
    data: state.data,
  }),
  { someAction }
)(AddBookList)
