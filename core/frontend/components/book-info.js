import React, { Component } from 'react'
import { Appbar, Button, Container } from 'muicss/react'
import { Link } from 'react-router'




class BookInfo extends Component {
  loadBooksFromServer() {
    fetch(URL_BOOKS+this.bookId).then(function(res){
      return res.json()
    }).then(function(json){

      let url
      if(!json.data) {
        url = URL_DOUBAN_BOOKS+this.bookId
      }else{
        this.setState({data: json.data[0]})
        url = URL_DOUBAN_BOOKS+json.data[0].douban_item_id
      }

      $.ajax({
        url: url,
        dataType: "jsonp"
      }).done(function(data){
        this.setState({
          dataFromDouban: data
        })
      }.bind(this))

    }.bind(this)).catch(err => {
      console.error(err)
    })
  }

  constructor(props) {
    super(props)
    this.bookId = props.params.id
    this.state = {
      data: {},
      dataFromDouban: {}
    }
  }

  componentDidMount() {
    this.loadBooksFromServer()
  }

  render() {
    let data = this.state.data
    let dataFromDouban = this.state.dataFromDouban
    let readBtn

    if(data.id) {
      readBtn = (
        <Link to={`/book/${data.id}`}><Button color="primary">阅读</Button></Link>
      )
    }

    return (
      <Container>
        <div className="book-info content-container">
          <h1 className="page-title book-name">{dataFromDouban.title}</h1>
          <div className="book-author">
            <strong>{dataFromDouban.author}</strong>
          </div>
          {
            dataFromDouban.image?(
              <div className="book-cover">
                <img src={dataFromDouban.image} />
              </div>
            ):null
          }
          {readBtn?readBtn:null}
          {
            dataFromDouban.author_intro?(
              <div className="book-author-intro">
                <h2>作者简介</h2>
                <p>{dataFromDouban.author_intro}</p>
              </div>
            ):null
          }
          {
            dataFromDouban.summary?(
              <div className="book-summary">
                <h2>内容简介</h2>
                <p>{dataFromDouban.summary}</p>
              </div>
            ):null
          }
          <p><a target="_blank" href={`http://book.douban.com/subject/${dataFromDouban.id}`}>在豆瓣查看</a></p>
        </div>
      </Container>
    )
  }
}

export default BookInfo
