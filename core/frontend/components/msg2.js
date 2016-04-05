import React, { Component } from 'react'

class Msg extends Component {

  constructor(props) {
    super(props)

    this.state= {
      show: true,
      content: null
    }
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    this.setState({
      content: nextProps.content,
      show: true
    })

    if(nextProps.hide) {
      if(nextProps.content) {
        setTimeout(function(){
          this.setState({
            show: false
          })
        }.bind(this), nextProps.hide)
      }
    }
  }

  render() {
    let msg

    if(this.state.content && this.state.show) {
      msg = (
        <div className="msg mui--z1">{this.state.content}</div>
      )
    }else{
      msg = null
    }
    return (
      <div>{msg}</div>
    )
  }
}

export default Msg
