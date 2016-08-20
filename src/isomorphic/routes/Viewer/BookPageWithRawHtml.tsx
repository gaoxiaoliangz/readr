import React, { Component } from 'react'
const styles: any = require('./_book-page-list.scss')
const styles2: any = require('./_book-page.scss')

interface IProps {
  bookHtml: any
}

interface IState {
}

class BookPageWithRawHtml extends Component<IProps, IState> {

  bookHtml: any

  constructor(props) {
    super(props)
  }

  getNodes() {
    return this.bookHtml
  }

  componentDidMount() {
    console.log('raw mounted')
  }

  render() {
    return (
      <ul className={styles.pages}>
        <li className={styles2.page}>
          <div ref={ref => { this.bookHtml = ref }} className={styles2.content} dangerouslySetInnerHTML={{ __html: this.props.bookHtml }}></div>
        </li>
      </ul>
    )
  }
}

export default BookPageWithRawHtml
