import React, { Component } from 'react'
import { Link } from 'react-router'
import BookInfoPopup from '../BookInfoPopup'
import _ from 'lodash'
import CSSModules from 'react-css-modules'
const styles = require('./_book.scss')

interface IProps {
  title: string
  authors: string
  description: string
  id: string
  cover: string
  disablePopup?: boolean
}

interface IState {
  showPopup: boolean
}

@CSSModules(styles, {
  allowMultiple: true
})
export default class Book extends Component<IProps, IState> {

  constructor(props) {
    super(props)
    this.state = {
      showPopup: false
    }
    this.showPopup = this.showPopup.bind(this)
    this.hidePopup = this.hidePopup.bind(this)
  }

  showPopup() {
    this.setState({
      showPopup: true
    })
  }

  hidePopup() {
    this.setState({
      showPopup: false
    })
  }

  render() {
    return (
      <li onMouseEnter={this.showPopup} onMouseLeave={this.hidePopup} styleName="book">
        <Link to={'/book/' + this.props.id} >
          <div styleName="book-cover"><img src={this.props.cover}/></div>
          <div styleName="book-meta">
            <span title={this.props.title} styleName="book-name">{this.props.title || '无标题'}</span>
            <span styleName="book-author">{this.props.authors || '作者不详'}</span>
          </div>
        </Link>
        {
          this.state.showPopup && !this.props.disablePopup && (
            <BookInfoPopup
              bookId={this.props.id}
              title={this.props.title}
              author={this.props.authors}
              description={this.props.description}
            />
          )
        }
      </li>
    )
  }
}
