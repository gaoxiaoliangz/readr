import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { searchBooks, handleNotification } from 'actions'
import Input from 'elements/Input'
import Button from 'elements/Button'
import SelectizeInput from 'elements/SelectizeInput'
import Notification from 'components/Notification'
import apis from 'utils/apis'


class AddCollection extends Component{

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

  searchTags(e) {
    let query = e.target.value

    if(query !== '') {
      apis.searchTags(query).then(response => {
        console.log(response)
        this.setState({
          tagResults: response
        })
      })
    }
  }

  componentDidMount() {
  }

  render(){
    let notification = this.props.notification

    return (
      <form>
        <Notification notification={notification} />
        <h1 className="page-title">Add Collection</h1>
        <Input value={this.state.collectionName} onChange={(e) => this.setState({collectionName: e.target.value})} placeholder="Name" />
        <SelectizeInput
          ref="collectedBooks"
          onChange={this.searchBooks.bind(this)}
          onValuesChange={(targetIndex, type) => {
            switch (type) {
              case 'ADD':
                this.setState({
                  collectedBooks: [...this.state.collectedBooks, this.state.bookResults[targetIndex]]
                })
              break

              case 'REMOVE':
                this.setState({
                  collectedBooks: this.state.collectedBooks.filter((value, index) => (targetIndex !== index?true:false))
                })
              break

              default:
                console.error('Undefined type')
            }
          }}
          options={this.state.bookResults.map(a => ({
            value: a.title,
            subInfo: a.author.map(a => a.name).join(', '),
            thumb: a.cover
          }))}
          values={this.state.collectedBooks.map(book => book.title)}
          placeholder="Books"
        />
        {/*<SelectizeInput
          ref="collectionTags"
          onChange={this.searchTags.bind(this)}
          onValuesChange={(targetIndex, type) => {
            switch (type) {
              case 'ADD':
                this.setState({
                  collectionTags: [...this.state.collectionTags, this.state.tagrResults[targetIndex]]
                })
              break

              case 'REMOVE':
                this.setState({
                  collectionTags: this.state.collectionTags.filter((value, index) => (targetIndex !== index?true:false))
                })
              break

              default:
                console.error('Undefined type')
            }
          }}
          options={this.state.tagResults.map(a => a.name)}
          values={this.state.collectionTags.map(a => a.name)}
          placeholder="Author"
          addNewValue={() => {
            let name = this.refs.bookAuthor.state.value

            this.setState({
              isAddAuthorModalVisible: true,
              authorName: name
            })
          }}
        />*/}
        <textarea value={this.state.collectionDesc} onChange={(e) => this.setState({collectionDesc: e.target.value})} placeholder="Description" />
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
  { searchBooks, handleNotification }
)(AddCollection)
