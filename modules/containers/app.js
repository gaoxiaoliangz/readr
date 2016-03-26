import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from 'actions'

var App = React.createClass({
  render: function(){
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
})

export default App
