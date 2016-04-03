// 'use strict'
import React, { Component } from 'react'
// var React = require('react')
// var Component = require('react').Component

class App extends Component{
  constructor(props) {
    super(props)
  }

  render(){
    return (
      <div>
        this is the fucking server rendering
      </div>
    )
  }
}


exports.default = App
