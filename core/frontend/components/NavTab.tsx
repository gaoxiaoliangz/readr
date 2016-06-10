import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

interface Props {
  tabs: Array<string>
  current?: number
}

class NavTab extends Component<Props, any> {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="nav-tab">
        <ul>
          {
            this.props.tabs.map((tab, index) => {
              let className = null
              if(index === this.props.current) {
                className = 'current'
              }
              return (
                <li className={className} key={index}>{tab}</li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

export default connect(

)(NavTab as any)