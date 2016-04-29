import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
// import { someAction } from 'actions'

class BookShelf extends Component{

  // static fetchData({store, params}) {
  //   return store.dispatch(fetch())
  // }

  constructor(props) {
    super(props)
  }

  render(){

    return (
      <div>
        <ul>
          <li>
            <div className="book-name">abc</div>
            <span className="progress">已阅读 50%</span>
          </li>
          <li>
            <div className="book-name">abc</div>
            <span className="progress">已阅读 50%</span>
          </li>
        </ul>

      </div>
    )
  }
}

export default BookShelf
// export default connect(
//   state => ({
//     data: state.data,
//   }),
//   { someAction }
// )(Comp)
