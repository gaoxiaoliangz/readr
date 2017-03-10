import React, { Component } from 'react'
import { Link } from 'react-router'
import BookList from '../BookList'
import Loading from '../../components/Loading'
import CSSModules from 'react-css-modules'
import Icon from '../../components/Icon'
const styles = require('./BookListSection.scss')

interface IProps {
  bookEntities: any
  title?: string
  moreLink?: string
  isFetching?: boolean
}

@CSSModules(styles, {
  allowMultiple: true
})
class BookListSection extends Component<IProps, {}> {
  render() {
    const {isFetching, title, moreLink, bookEntities} = this.props

    return (
      <div styleName="book-list-section">
        {
          this.props.title && (
            moreLink
              ? (
                <h2 styleName="section-title">
                  <Link to={moreLink}>{title}<Icon name="arrowRight" size={20} /></Link>
                </h2>
              )
              : (
                <h2 styleName="section-title">{title}</h2>
              )
          )
        }
        {
          isFetching && bookEntities.length === 0
            ? <Loading />
            : <BookList bookEntities={bookEntities} />
        }
      </div>
    )
  }
}

export default BookListSection
