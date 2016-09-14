import React, { Component } from 'react'
import { Link } from 'react-router'
import BookList from '../BookList'
import CSSModules from 'react-css-modules'
import Icon from '../../elements/Icon'
const styles = require('./BookListSection.scss')

interface IProps {
  bookEntities: any
  title?: string
  moreLink?: string
}

@CSSModules(styles, {
  allowMultiple: true
})
class BookListSection extends Component<IProps, {}> {
  render() {
    let title = this.props.title
    let moreLink = this.props.moreLink ? this.props.moreLink : null

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
        <BookList bookEntities={this.props.bookEntities} />
      </div>
    )
  }
}

export default BookListSection
