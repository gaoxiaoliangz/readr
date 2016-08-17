import React from 'react'
const styles: any = require('./_book-page-list.scss')
const styles2: any = require('./_book-page.scss')

type TProps = {
  children?: any
  bookHtml: any
}

function BookPageWithRawHtml(props: TProps) {
  return (
    <ul className={styles.pages}>
      <li className={styles2.page}>
        <div className={styles2.content} dangerouslySetInnerHTML={{ __html: props.bookHtml }}></div>
      </li>
    </ul>
  )
}

export default BookPageWithRawHtml
