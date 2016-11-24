import React, { Component } from 'react'
import BookPages from './BookPages'
import _ from 'lodash'

const BookChapter = ({ id, markdown}) => {
  return (
    <div id={id}>
      <BookPages
        pages={[{
          nodes: [markdown]
        }]}
        />
    </div>
  )
}

interface Props {
  bookFlesh: {
    markdown: string
    id: string
  }[]
  onUpdate?: (ref: HTMLElement) => void
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
    const { onUpdate } = this.props
    if (onUpdate) {
      console.log('updated in BookChapters')
      onUpdate(this.chapters)
    }
  }

  componentDidUpdate() {
    this.triggerUpdate()
  }

  componentDidMount() {
    this.triggerUpdate()
  }

  render() {
    const { bookFlesh } = this.props

    return (
      <div ref={ref => this.chapters = ref}>
        {
          (bookFlesh || []).map(item => {
            return (
              <BookChapter
                id={item.id}
                markdown={item.markdown}
                key={item.id}
                />
            )
          })
        }
      </div>
    )
  }
}

export default BookChapters
