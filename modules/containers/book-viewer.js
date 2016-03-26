import React, { Component } from 'react'
import 'whatwg-fetch'

//
// const defaultConfig = {
//   progress: 0,
//   fx: "fadeIn",
//   bookId: obj.bookId,
//   bookContentRaw: null,
//   bookContentHtml: null,
//
//   view: {
//     mode: obj.view.mode || "vertical",
//     pageHeight: obj.view.pageHeight || 910,
//   },
//   rendering: {
//     elements: [],
//     view: {
//       pageHeight: null,
//       pageSum: null,
//       windowWidth: null,
//       bookHeight: null
//     }
//   }
// };
// this.status = {
//   progress: null,
//   page: null,
//   scrollTop: null
// };


class BookViewer extends Component {



  // getLocalBookData() {
  //   var bookId = this.config.bookId;
  //
  //   if(!localStorage.getItem("book_"+bookId+"_raw") || !localStorage.getItem("book_"+bookId+"_html") || !localStorage.getItem("book_"+bookId+"_rendering")){
  //     this.getBookData(this.renderBook);
  //   }else{
  //     this.config.rendering = JSON.parse(localStorage.getItem("book_"+bookId+"_rendering"));
  //     this.config.bookContentHtml = localStorage.getItem("book_"+bookId+"_html");
  //     this.config.bookContentRaw = localStorage.getItem("book_"+bookId+"_raw");
  //   }
  // }
  //
  // getBookData(callback) {
  //   // get book data and store it in local storage
  //   var bookId = this.config.bookId,
  //       that = this;
  //
  //   $.ajax({
  //     url: "/api/v0.1/books/" + bookId + '/content/',
  //     type: 'GET',
  //     dataType: 'json',
  //     complete: function(jqXHR, textStatus) {
  //     },
  //     success: function(result, textStatus, jqXHR) {
  //       if(result.data){
  //         localStorage.setItem("book_"+bookId+"_raw", result.data[0].raw);
  //         localStorage.setItem("book_"+bookId+"_html", result.data[0].html);
  //         callback.call(that);
  //       }else{
  //         alert("Wrong book content format!");
  //       }
  //     },
  //     error: function(jqXHR, textStatus, errorThrown) {
  //       console.log(jqXHR);
  //       console.log(textStatus);
  //       console.log(errorThrown);
  //     }
  //   })
  // }




  // getInitialState() {
  //   return {data: {
  //     html: ""
  //   }}
  // }

  constructor(props) {
    super(props)
    this.state = {
      data: {
        html: ""
      }
    }
  }



  componentDidMount() {
    var bookId = this.props.params.id
    var url = "/api/v0.1/books/" + bookId + '/content/'

    fetch(url).then(function(res){
      return res.json()
    }).then(function(json){
      // console.log(json)
      this.setState({data: json.data[0]})
      // console.log(json);
      // console.log(this.state)
    }.bind(this))
  }

  render() {
    return (
      <div className="page-book-viewer">
        <div className="functions">
          <div className="container">
            <span className="home" />
            <span className="title">奥德赛</span>
            <span className="loc">35/504</span>
          </div>
        </div>
        <Pages data={this.state.data}/>
      </div>
    )
  }
}

class Pages extends Component {

  componentDidMount() {
  }

  render() {
    return (
      <div className="pages">
        <ul>
          <Page data={this.props.data}/>
        </ul>
      </div>
    )
  }
}

class Page extends Component {

  componentDidMount() {
  }

  render() {
    var html = this.props.data.html
    console.log(html)
    return (
      <li>
        <div className="content" dangerouslySetInnerHTML={{__html: html}} />
      </li>
    )
  }
}


export default BookViewer
