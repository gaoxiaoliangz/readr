import React, { Component } from 'react'
import BookPages from './BookPages'

interface Props {
  allPages: TBookPage[]
  pageHeight?: number
  fluid?: boolean
}

interface State {
}

class BookContainer extends Component<Props, State> {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
  }

  render() {
    return (
      <div>
        <BookPages
          
        />
      </div>
    )
  }
}

export default BookContainer
