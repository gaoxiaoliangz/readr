import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { someAction } from 'actions'

class Comp extends Component{

  static fetchData({store, params}) {
    return store.dispatch(fetch())
  }

  constructor(props) {
    super(props)
  }

  render(){
    return (
      <div>
      </div>
    )
  }
}

export default connect(
  state => ({
    data: state.data,
  }),
  { someAction }
)(Comp)
