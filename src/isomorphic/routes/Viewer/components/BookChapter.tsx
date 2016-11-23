import React, { Component } from 'react'
import { connect } from 'react-redux'
import { sendNotification } from '../../../store/actions'
import BookPages from './BookPages'

interface Props {
  markdown: string
  id: string
  onMount?: (ref: HTMLElement) => void
}

interface AllProps extends Props {
  routing: any
  sendNotification: any
}

class BookChapter extends Component<AllProps, {}> {

  chapter: HTMLElement

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const { onMount } = this.props
    if (onMount) {
      onMount(this.chapter)
    }
  }


}

export default connect<{}, {}, Props>(
  state => ({
    routing: state.routing.locationBeforeTransitions
  }),
  { sendNotification }
)(BookChapter)
