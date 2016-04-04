import React, { Component } from 'react'
import { Panel, Appbar, Container, Form, Input, Textarea, Button } from 'muicss/react'
import $ from 'jquery'
import Branding from 'components/branding'
import { URL_BOOKS } from 'constants/api-urls'

class AddBook extends Component {
  constructor(props) {
    super(props)
    this.state = {
      bookName: "",
      author: "",
      cover: "",
      bookContent: ""
    }
  }

  handleAddBook(event) {
    event.preventDefault()

    let params = {
      book_name: this.state.bookName,
      book_author: this.state.author,
      book_cover: this.state.cover,
      book_content: this.state.bookContent
    }

    console.log(params);

    $.post(URL_BOOKS, params, function(data){
      console.log(data)
    }.bind(this))
  }

  handleInputChange(event) {
    this.setState({[event.target.name]: event.target.value})
  }

  render() {
    return (
      <div className="page-add-book">
        <Branding />
        <Container>
          <Form className="content-container" action="#" method="post">
            <h1 className="page-title">添加书籍</h1>
            <Input onChange={this.handleInputChange.bind(this)} value={this.state.bookName} name="bookName" label="书名" floatingLabel={true} />
            <Input onChange={this.handleInputChange.bind(this)} value={this.state.author} name="author" label="作者" floatingLabel={true} />
            <Input onChange={this.handleInputChange.bind(this)} value={this.state.cover} name="cover" label="封面" floatingLabel={true} />
            <Textarea style={{height: 200}} onChange={this.handleInputChange.bind(this)} value={this.state.bookContent} name="bookContent" label="书籍内容" floatingLabel={true} />
            <Button onClick={this.handleAddBook.bind(this)} variant="raised">确认添加</Button>
          </Form>
        </Container>
      </div>
    )
  }
}

export default AddBook
