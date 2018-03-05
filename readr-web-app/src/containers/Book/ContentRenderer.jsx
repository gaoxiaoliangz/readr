import React, { Component } from 'react'
import PT from 'prop-types'

class ContentRenderer extends Component {
  static propTypes = {
    htmlString: PT.string.isRequired
  }

  render() {
    const { htmlString } = this.props
    return (
      <div>
        {htmlString}
      </div>
    )
  }
}

export default ContentRenderer
