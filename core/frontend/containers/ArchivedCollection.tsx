import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

interface Props {
  name: string
}

class ArchivedCollection extends Component<Props, any> {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="archived-collection">
        <div className="page-title">往期书单</div>
        <ul>
          <li>书单01</li>
          <li>书单02</li>
          <li>书单03</li>
          <li>书单04</li>
          <li>书单05</li>
        </ul>
        <div className="page-load-more">加载更多</div>
      </div>
    )
  }
}

export default connect(

)(ArchivedCollection as any)