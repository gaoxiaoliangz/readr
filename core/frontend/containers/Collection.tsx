import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import Button from '../elements/Button'

interface Props {
  name: string
}

class Collection extends Component<Props, any> {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="collection">
        <div className="page-header">
          <div className="page-title">书单名称</div>
          <div className="sub-title">10 本书</div>
          <div className="book-slider">
            <ul>
              <li>01</li>
              <li>02</li>
              <li>03</li>
            </ul>
          </div>
          <Button>收藏</Button>
        </div>
        <div className="page-content">
          <p>内容。。。</p>
        </div>
      </div>
    )
  }
}

export default connect(

)(Collection as any)