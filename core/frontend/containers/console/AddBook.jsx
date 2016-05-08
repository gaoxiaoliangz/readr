import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import ApiRoots from 'constants/ApiRoots'
import { fetchDoubanBookSearchResults, clearBookSearch, handleNotification } from 'actions'
import callApi from 'utils/callApi'
import Notification from 'components/Notification'
import Input from 'elements/Input'
import Button from 'elements/Button'
import SelectizeInput from 'elements/SelectizeInput'
import _ from 'lodash'
import apis from 'utils/apis'

const ReactSelectize = require("react-selectize");
const SimpleSelect = ReactSelectize.SimpleSelect;
const MultiSelect = ReactSelectize.MultiSelect;

class AddBook extends Component {
  constructor(props) {
    super(props)
    this.defaultState = {
      searchQuery: "",
      currentBook: -1,
      previewIndex: -1,
      conformed: false,
      bookTitle: '',
      bookAuthor: '',
      bookCover: '',
      bookDescription: '',
      bookContent: '',
      dbQuery: '',
      dbBook: []
    }
    this.state = this.defaultState
    this.fetchDoubanBookSearchResults = _.debounce(this.props.fetchDoubanBookSearchResults, 150)
  }

  // handleAddBook2(event) {
  //   event.preventDefault()
  //
  //   let currentBook = this.state.currentBook
  //   let dataToPost = {}
  //   let bookContent = ReactDOM.findDOMNode(this.refs.bookContent).value
  //   let isValid = false
  //
  //   console.log(this.state);
  //
  //   while (true) {
  //     if(currentBook !== -1) {
  //       dataToPost.bookInfo = this.props.doubanBooks[this.props.doubanBookSearchResults[this.state.searchQuery].ids.filter((book, index) => {
  //         if(index === currentBook) {
  //           return true
  //         }
  //       })[0]]
  //     }else{
  //       this.props.handleNotification('未选择书籍！')
  //       break
  //     }
  //
  //     if(bookContent) {
  //       dataToPost.bookContent = bookContent
  //     }else{
  //       this.props.handleNotification('请输入书籍内容！')
  //       break
  //     }
  //
  //     isValid = true
  //     break
  //   }
  //
  //   dataToPost.bookInfo = JSON.stringify(dataToPost.bookInfo)
  //
  //   if(isValid) {
  //     callApi({ fullUrl: `${ApiRoots.LOCAL}books`, method: 'POST', data: dataToPost }).then(res => {
  //       this.props.handleNotification('添加成功')
  //       this.removeResult()
  //       ReactDOM.findDOMNode(this.refs.bookContent).value = ''
  //     }).catch((err) => {
  //       console.error(err)
  //       this.props.handleNotification(err.message)
  //     })
  //   }
  // }

  handleAddBook(e) {
    const data = {
      title: this.state.bookTitle,
      description: this.state.bookDescription,
      content: this.state.bookContent,
      author: '567890',
      cover: this.state.bookCover
    }
    console.log(data);
    apis.addBook(data).then(result => {
      this.props.handleNotification('添加成功')
    }, error => {
      this.props.handleNotification(err.message)
    })
    e.preventDefault()
  }

  search(event) {
    let query = event.target.value

    this.setState({
      searchQuery: query,
      dbQuery: query
    })
    if(query !== '') {
      this.fetchDoubanBookSearchResults(query)
    }
  }

  conformResult(index) {
    this.setState({
      currentBook: index,
      conformed: true
    })
  }

  showBookCover(index) {
    this.setState({
      previewIndex: index
    })
  }

  removeResult() {
    this.setState(this.defaultState)
  }

  render() {
    let book = null
    let searchResultIds = this.props.doubanBookSearchResults[this.state.searchQuery] ?
      this.props.doubanBookSearchResults[this.state.searchQuery].ids : []
    let doubanBooks = this.props.doubanBooks
    let searchResults = searchResultIds.map(id => doubanBooks[id].title)

    if(this.state.currentBook !== -1) {
      book = searchResults[this.state.currentBook]
    }

    return (
      <form>
        <Notification notification={this.props.notification} />
        <h1 className="page-title">Add Book</h1>
        <SelectizeInput
          onChange={this.search.bind(this)}
          onValuesChange={values => {
            this.setState({
              dbBook: values
            })
          }}
          ref="dbBook"
          options={searchResults}
          values={this.state.dbBook}
          placeholder="Type book name to begin"
        />

        {
          !this.state.conformed?(
            <Input onChange={this.search.bind(this)} value={this.state.searchQuery} placeholder="Type something to match book info"/>
          ):null
        }
        <Input
          onChange={event => {
            this.setState({
              bookTitle: event.target.value
            })
          }}
          value={this.state.bookTitle}
          placeholder="Title"
        />
        <Input
          onChange={event => {
            this.setState({
              bookAuthor: event.target.value
            })
          }}
          value={this.state.bookAuthor}
          placeholder="Author"
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
        {
          !this.state.conformed && searchResults?(
            <div className="drop-down">
              <ul>
                {
                  searchResults.map((item, index)=>{
                    return (
                      <li onMouseOver={this.showBookCover.bind(this, index)} onClick={this.conformResult.bind(this, index)} key={index}>
                        {item.title} ({item.author})
                        {
                          this.state.previewIndex === index?(
                            <div><img src={item.image} /></div>
                          ):null
                        }
                      </li>
                    )
                  })
                }
              </ul>
            </div>
          ):null
        }
        {
          book?(
            <div className="book">
              <div><img src={book.image} /></div>
              <h2 className="book-name">{book.title}</h2>
              <div className="book-author">作者：{book.author[0]}</div>
              <Button onClick={this.removeResult.bind(this)}>Reselect</Button>
            </div>
          ):null
        }
        <textarea
          placeholder="Description"
          style={{height: 100}}
          value={this.state.bookDescription}
          onChange={event => {
            this.setState({
              bookDescription: event.target.value
            })
          }}
        />
        <textarea
          placeholder="Paste book content here"
          style={{height: 100}}
          value={this.state.bookContent}
          onChange={event => {
            this.setState({
              bookContent: event.target.value
            })
          }}
        />
        <Button onClick={this.handleAddBook.bind(this)}>Add</Button>
      </form>
    )
  }
}

export default connect(
  state => ({
    doubanBookSearchResults: state.pagination.doubanBookSearchResults,
    doubanBooks: state.entities.doubanBooks,
    notification: state.components.notification
  }),
  { fetchDoubanBookSearchResults, handleNotification }
)(AddBook)
