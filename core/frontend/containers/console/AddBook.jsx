import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { API_ROOT } from 'constants/APIS'
import { fetchDoubanBookSearchResults, clearBookSearch, fetchUserAuthInfo, handleNotification } from 'actions'
import { callApi } from 'utils'
import Notification from 'components/Notification'
import Input from 'elements/Input'

class AddBook extends Component {
  constructor(props) {
    super(props)
    this.defaultState = {
      searchQuery: "",
      currentBook: -1,
      previewIndex: -1,
      conformed: false
    }
    this.state = this.defaultState
  }

  componentDidMount() {
    this.props.fetchUserAuthInfo()
  }

  handleAddBook(event) {
    event.preventDefault()

    let currentBook = this.state.currentBook
    let dataToPost = {}
    let bookContent = ReactDOM.findDOMNode(this.refs.bookContent).value
    console.log(bookContent);
    let isValid = false

    while (true) {
      if(currentBook !== -1) {
        dataToPost.bookInfo = this.props.book.searchResults.books[currentBook]
      }else{
        this.props.handleNotification('未选择书籍！')
        break
      }

      if(bookContent) {
        dataToPost.bookContent = bookContent
      }else{
        this.props.handleNotification('请输入书籍内容！')
        break
      }

      isValid = true
      break
    }

    dataToPost.bookInfo = JSON.stringify(dataToPost.bookInfo)

    if(isValid) {
      callApi(`${API_ROOT}books`, 'POST', dataToPost).then(res => {
        this.props.handleNotification('添加成功')
      }).catch((err) => {
        console.error(err)
        this.props.handleNotification(err.message)
      })
    }
  }

  search(event) {
    this.setState({searchQuery: event.target.value})
    this.props.fetchDoubanBookSearchResults('search?count=5&q=' + event.target.value)
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
    this.props.clearBookSearch()
  }

  render() {
    let book = null

    if(this.state.currentBook !== -1) {
      book = this.props.book.searchResults.books[this.state.currentBook]
    }

    return (
      <form>
        <Notification notification={this.props.notification} />
        <h1 className="page-title">Add book</h1>
        {
          !this.state.conformed?(
            <Input onChange={this.search.bind(this)} value={this.state.searchQuery} placeholder="Type something to match book info"/>
          ):null
        }
        {
          !this.state.conformed && this.props.book.searchResults?(
            <div className="drop-down">
              <ul>
                {
                  this.props.book.searchResults.books.map((item, index)=>{
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
              <button className="btn" onClick={this.removeResult.bind(this)}>Reselect</button>
            </div>
          ):null
        }
        <textarea placeholder="Paste book content here" style={{height: 200}} name="book_content" ref="bookContent" />
        <button className="btn" onClick={this.handleAddBook.bind(this)}>Add</button>
      </form>
    )
  }
}

export default connect(
  state => ({
    user: state.user,
    book: state.book,
    notification: state.notification
  }),
  { fetchUserAuthInfo, fetchDoubanBookSearchResults, clearBookSearch, handleNotification }
)(AddBook)
