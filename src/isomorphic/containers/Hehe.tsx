import React, { Component } from 'react'
import ReactDOM from 'react-dom'

interface Props {
}

class Comp extends Component<Props, {}> {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
  }

  render() {
    return (
      <div>demo22</div>
    )
  }
}

ReactDOM.render(<Comp />, document.getElementById('root'))
