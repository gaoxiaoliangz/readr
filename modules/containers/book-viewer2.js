import React, { Component } from 'react'
import { Link } from 'react-router'
import 'whatwg-fetch'
import $ from 'jquery'
import Immutable from 'immutable'

import BookPage from 'components/book-page'

import configureStore from 'store/configureStore'
const store = configureStore()

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { requestBook, receiveBook, fetchBook } from 'actions'

const actions = {
  requestBook,
  receiveBook
}

class BookViewer extends Component {

  constructor(props) {
    super(props)
    let bookId = props.params.id
    this.bookId = bookId
  }


  componentWillUnmount () {

  }

  componentDidMount() {

    // store.dispatch(fetchBook(this.bookId)).then(() =>
    //   console.log(store.getState())
    // )

    


    // this.props.actions.receiveBook(this.bookId).data.then(data=>{
    //   console.log(data)
    //   console.log(store.getState())
    // })
    //
    //
    // var abc = fuck => you => {
    //   console.log(fuck)
    // }
    //
    // console.log(store.dispatch(fetchBook(this.bookId)).then(() =>
    //   console.log(store.getState())
    // ));

    // console.log();
    // abc("fuck")("haha");

    // fetch("http://readrweb.com/api/v0.1/books").then(res=>{
    //   return res.json()
    // }).then(data=>{
    //   console.log(data);
    // })


  }

  render() {

    return (
      <div className="page-book-viewer">
        <div className="functions" style={{display: "none"}}>
          <div className="container">
            <span className="home">
              <Link to="/bookstore"></Link>
            </span>
            <span className="title"></span>
            <span className="loc"></span>
          </div>
        </div>
        <div>rebuild</div>
        {/*<Pages />*/}
        <BookPage bookId={this.bookId} />
      </div>
    )
  }
}

class Pages extends Component {

  render() {
    let style = {}

    if(this.props.view) {
      if(this.props.config.mode === "VERTICAL") {
        style = {
          height: this.props.view.bookHeight
        }
      }
    }

    return (
      <div className="pages">
        <div className="container">
          <ul style={style}>
            {
              this.props.pages.map((page, index) => {
                return (
                  <Page key={index} page={page} config={this.props.config} />
                )
              })
            }
          </ul>
        </div>
      </div>
    )
  }
}


class Loading extends Component {
  render() {
    return (
      <div className="loading-wrap">
        <span className="icon icon-loading"></span>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    book: state.book
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(BookViewer)

export default connect(
  mapStateToProps,
  { fetchBook }
)(BookViewer)
