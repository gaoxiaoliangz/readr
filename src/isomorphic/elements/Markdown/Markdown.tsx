import React, { Component } from 'react'
const ReactMarkdown = require('react-markdown')

interface Props {
  input: string
}

class Markdown extends Component<Props, {}> {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
  }

  render() {
    const { input } = this.props

    return (
      <ReactMarkdown source={input} />
    )
  }
}

export default Markdown
