import React, { Component, PropTypes } from 'react'
import Icon from 'elements/Icon'

class AddTags extends Component{
  constructor(props) {
    super(props)
    this.state = {
      tags: [],
      showQueryResult: false,
      focus: false
    }
  }

  handleFocus() {
    this.setState({
      focus: true
    })
  }

  handleBlur() {
    this.setState({
      focus: false
    })
  }

  removeTag(targetIndex) {
    this.props.resetValue()
    this.setState({
      tags: this.state.tags.filter((tag, index) => (targetIndex !== index?true:false)),
      showQueryResult: false
    })
    this.getFocus()
  }

  handleKey(e) {
    if(e.keyCode === 8 && !this.props.value) {
      this.removeTag(this.state.tags.length -1)
    }
    if(e.keyCode === 13 && this.state.showQueryResult) {
      this.addTag(this.props.queryResults[0])
    }
  }

  addTag(tag) {
    this.props.resetValue()
    this.setState({
      tags: [...this.state.tags, tag],
      showQueryResult: false
    })
    this.getFocus()
  }

  getFocus() {
    this.refs.input.focus()
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.value != '') {
      this.setState({
        showQueryResult: true
      })
    }
  }

  render(){
    let value = this.props.value
    let tags = this.state.tags
    let queryResults = this.props.queryResults?this.props.queryResults:[]
    let onChange = this.props.onChange
    let className = 'input-addtags' + (this.props.className?` ${this.props.className}`:'') + (this.state.focus === true?' focus':'') + (tags.length === 0?' empty':'')
    let initialInputWidth = this.props.initialInputWidth?this.props.initialInputWidth:'100%'
    let inputWidth = tags.length > 0?(value.length === 0?16:value.length * 16):initialInputWidth
    let placeholder = tags.length > 0?'':this.props.placeholder

    return (
      <div onClick={this.getFocus.bind(this)} className={className}>
        {
          tags.map((tag, index) => {
            return (
              <span key={index} className="tag">{tag.text}<Icon size={"small"} name="close-light" onClick={this.removeTag.bind(this, index)} /></span>
            )
          })
        }
        <input onKeyDown={this.handleKey.bind(this)} style={{width: inputWidth}} ref="input" onBlur={this.handleBlur.bind(this)} onFocus={this.handleFocus.bind(this)} onChange={onChange} value={value} placeholder={placeholder} />
        {
          this.state.showQueryResult?(
            <ul className="query-results">
              {
                queryResults.map((result, index) => {
                  return (
                    <li onClick={this.addTag.bind(this, result)} key={index}>{result.text}</li>
                  )
                })
              }
            </ul>
          ):null
        }
      </div>
    )
  }
}

AddTags.propTypes = {
  // placeholder: React.PropTypes.string.isRequired
}

export default AddTags
