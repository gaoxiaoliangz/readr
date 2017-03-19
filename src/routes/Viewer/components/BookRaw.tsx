import React, { Component } from 'react'
import BookPages from './BookPages'
import _ from 'lodash'

const Chapter = ({ id, markdown }) => {
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
  onRawDataMount?: (ref: HTMLElement) => void
}

export default class BookRaw extends Component<Props, {}> {

  chapters: HTMLElement

  constructor(props) {
    super(props)
  }

  shouldComponentUpdate(nextProps, nextState) {
    return !_.isEqual(this.state, nextState) || !_.isEqual(this.props, nextProps)
  }

  triggerUpdate() {
    const { onRawDataMount } = this.props
    if (onRawDataMount && this.props.bookFlesh && this.props.bookFlesh.length !== 0) {
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
    const { bookFlesh } = this.props

    return (
      <div ref={ref => this.chapters = ref}>
        {
          (bookFlesh || []).map(item => {
            return (
              <Chapter
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
