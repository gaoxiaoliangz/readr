import React, { Component } from 'react'
import BookPages from './BookPages'
import _ from 'lodash'

const BookChapter = ({ id, markdown, fluid}) => {
  return (
    <div id={id}>
      <BookPages
        pages={[{
          nodes: [markdown]
        }]}
        fluid={fluid}
        />
    </div>
  )
}

interface Props {
  bookFlesh: {
    markdown: string
    id: string
  }[]
  onRawDataMount?: (ref: HTMLElement) => void
  fluid: boolean
}

class BookChapters extends Component<Props, {}> {

  chapters: HTMLElement

  constructor(props) {
    super(props)
  }

  shouldComponentUpdate(nextProps, nextState) {
    return !_.isEqual(this.state, nextState) || !_.isEqual(this.props, nextProps)
  }

  triggerUpdate() {
    const { onRawDataMount } = this.props
    if (onRawDataMount) {
      onRawDataMount(this.chapters)
    }
  }

  componentDidUpdate() {
    this.triggerUpdate()
  }

  componentDidMount() {
    this.triggerUpdate()
  }

  render() {
    const { bookFlesh, fluid } = this.props

    return (
      <div ref={ref => this.chapters = ref}>
        {
          (bookFlesh || []).map(item => {
            return (
              <BookChapter
                id={item.id}
                markdown={item.markdown}
                key={item.id}
                fluid={fluid}
                />
            )
          })
        }
      </div>
    )
  }
}

export default BookChapters
