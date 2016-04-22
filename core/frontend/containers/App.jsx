import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import { fetchBookList } from 'actions'

class App extends Component{
  constructor(props) {
    super(props)
  }

  render(){
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

// export default App

export default connect(
  state => ({
    bookList: state.book.bookList,
  }),
  { fetchBookList }
)(App)
