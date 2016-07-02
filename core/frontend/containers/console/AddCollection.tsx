import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { searchBooks, handleNotification } from 'actions/index'
import Input from 'elements/Input'
import Button from 'elements/Button'
import SelectizeInput from 'elements/SelectizeInput'
import Notification from 'components/Notification'
import apis from 'utils/apis'


class AddCollection extends Component<any, any> {

  defaultState: {}

  constructor(props) {
    super(props)
    this.defaultState = {
      bookResults: [],
      collectedBooks: [],
      collectionName: '',
      collectionDesc: ''
    }
    this.state = Object.assign({}, this.defaultState)
  }

  // getCurrentSearchResults() {
  //   let query = this.state.booksToAdd
  //   let books = this.props.books
  //
  //   return this.props.bookSearchResults?this.props.bookSearchResults[query].ids.map((id, index) => {
  //     console.log(id);
  //     return books[id]
  //   }):[]
  // }

  addCollection(e) {
    e.preventDefault()
    let name = this.state.collectionName
    let items = JSON.stringify(this.state.collectedBooks.map(a => a.id))
    let description = this.state.collectionDesc

    const data = {name, items, description}

    apis.addCollection(data).then(result => {
      this.props.handleNotification('添加成功')
      this.setState(this.defaultState)
    }, error => {
      this.props.handleNotification(error.message)
    })
  }

  searchBooks(e) {
    let query = e.target.value

    if(query !== '') {
      apis.searchBooks(query).then(response => {
        console.log(response)
        this.setState({
          bookResults: response
        })
      })
    }
  }

  // searchTags(e) {
  //   let query = e.target.value

  //   if(query !== '') {
  //     apis.searchTags(query).then(response => {
  //       console.log(response)
  //       this.setState({
  //         tagResults: response
  //       })
  //     })
  //   }
  // }

  componentDidMount() {
  }

  render(){
    let notification = this.props.notification

    return (
      <form>
        <Notification notification={notification} />
        <h1 className="page-title">Add Collection</h1>
        <Input value={this.state.collectionName} onChange={(e) => this.setState({collectionName: e.target.value})} placeholder="Name" />
        
        <textarea value={this.state.collectionDesc} onChange={(e) => this.setState({collectionDesc: (e.target as HTMLTextAreaElement).value})} placeholder="Description" />
        <Button onClick={this.addCollection.bind(this)}>Add</Button>
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
  { searchBooks, handleNotification } as any
)(AddCollection)
