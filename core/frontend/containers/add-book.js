import React, { Component } from 'react'
import { Panel, Appbar, Container, Form, Input, Textarea, Button } from 'muicss/react'
import { Link, browserHistory } from 'react-router'
import $ from 'jquery'
import Branding from 'components/branding'
import Msg from 'components/msg'
import { URL_BOOKS } from 'constants/api-urls'
import { URL_DOUBAN_BOOKS } from 'constants/api-urls'
import { connect } from 'react-redux'

import { fetchUserAuthInfo } from 'actions'

class AddBook extends Component {
  constructor(props) {
    super(props)
    this.state = {
      bookName: "",
      bookContent: "",
      doubanItemId: "",
      status: ""
    }
  }

  componentDidMount() {
    this.props.fetchUserAuthInfo('auth')
  }

  handleAddBook(event) {
    event.preventDefault()
    let isValid = true
    let params = {
      book_name: this.state.bookName,
      book_content: this.state.bookContent,
      douban_item_id: this.state.doubanItemId
    }

    for(var prop in params) {
      console.log(prop);
      if(params[prop].length === 0) {
        isValid = false
        this.setState({
          status: `${prop} 不能为空！`
        })
        setTimeout(function(){
          this.setState({
            status: null
          })
        }.bind(this), 3000)
        break
      }
    }

    if(isValid) {
      $.post(URL_BOOKS, params, function(data){
        console.log(data);
        if(data.data) {
          this.setState({
            status: '添加成功！',
            bookName: '',
            bookContent: '',
            doubanItemId: '',
            dataFromDouban: '',
            visiableCoverIndex: -1,
            currentBook: ''
          })

          setTimeout(function(){
            this.setState({
              status: ''
            })
          }.bind(this), 3000)
        }
      }.bind(this))
    }
  }

  handleInputChange(event) {
    this.setState({[event.target.name]: event.target.value})

    if(event.target.value && event.target.name === "bookName") {
      var url = URL_DOUBAN_BOOKS + 'search?count=5&q=' + event.target.value
      $.ajax({
        url: url,
        dataType: "jsonp"
      }).done(function(data){
        console.log(data)
        data.books.forEach((item)=>{
          console.log(item.title)
        })
        this.setState({
          dataFromDouban: data,
          visiableCoverIndex: -1
        })
      }.bind(this))
    }else{
      this.setState({
        dataFromDouban: {books:[]}
      })
    }
  }

  conformResult(item) {
    this.setState({
      dataFromDouban: {books:[]}
    })
    this.setState({
      doubanItemId: item.id,
      bookName: item.title,
      currentBook: item
    })
  }

  showBookCover(index) {
    this.setState({
      visiableCoverIndex: index
    })
  }

  render() {
    return (
      <div className="page-add-book">
        <Branding />
        <Container>
          <Form className="content-container" action="#" method="post">
            <Msg content={this.state.status} />
            <h1 className="page-title">添加书籍</h1>
            <Input onChange={this.handleInputChange.bind(this)} value={this.state.bookName} name="bookName" label="搜索" floatingLabel={false} hint="现阶段，书籍信息均从豆瓣获取，输入书名或书籍相关信息以检索"/>
            <p></p>
            {
              (()=>{
                if(this.state.dataFromDouban) {
                  return (
                    <div className="drop-down">
                      <ul>
                        {
                          this.state.dataFromDouban.books.map((item, index)=>{
                            return (
                              <li onMouseOver={this.showBookCover.bind(this, index)} onClick={this.conformResult.bind(this, item)} key={index}>
                                {item.title} ({item.author})
                                {
                                  (()=>{
                                    if(this.state.visiableCoverIndex === index) {
                                      return (
                                        <div><img src={item.image} /></div>
                                      )
                                    }
                                  })()
                                }
                              </li>
                            )
                          })
                        }
                      </ul>
                    </div>
                  )
                }
              })()
            }
            {
              (()=>{
                if(this.state.currentBook) {
                  let book = this.state.currentBook
                  return (
                    <div className="book">
                      <img src={book.image} />
                      <div className="book-name">{book.title}</div>
                      <div className="book-author">{book.author[0]}</div>
                    </div>
                  )
                }
              })()
            }
            <Input onChange={this.handleInputChange.bind(this)} value={this.state.doubanItemId} name="doubanItemId" label="豆瓣条目 ID " floatingLabel={false} />
            <Textarea style={{height: 200}} onChange={this.handleInputChange.bind(this)} value={this.state.bookContent} name="bookContent" label="书籍内容" floatingLabel={false} />
            <Button onClick={this.handleAddBook.bind(this)} variant="raised">确认添加</Button>
          </Form>
        </Container>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  }
}

export default connect(
  mapStateToProps,
  { fetchUserAuthInfo }
)(AddBook)
