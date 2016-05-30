import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { fetchBook } from 'actions/index'

interface Props {
  name: string
}

class Comp extends Component<Props, any> {

  static fetchData({store, params}) {
    // return store.dispatch(fetchBook())
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
  { fetchBook } as any
)(Comp as any)
