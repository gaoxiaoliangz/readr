import React, { Component } from 'react'
import { Link } from 'react-router'
import BookInfoPopup from '../BookInfoPopup'
import _ from 'lodash'
import CSSModules from 'react-css-modules'
import styles from './Book.scss'

interface IProps {
  title: string
  authors: string
  description: string
  id: string
  cover: string
  disablePopup?: boolean
  showDesc?: boolean
  percentage?: number
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
    const { showDesc, description, cover, percentage } = this.props

    return (
      <div onMouseEnter={this.showPopup} onMouseLeave={this.hidePopup} styleName="book--card">
        <Link to={'/book/' + this.props.id} >
          {
            cover && (
              <div styleName="book-cover"><img src={this.props.cover} /></div>
            )
          }
          <div styleName="book-meta">
            <span title={this.props.title} className="text-overflow" styleName="book-name">{this.props.title || '无标题'}</span>
            <span styleName="book-author">{this.props.authors || '作者不详'}</span>
            {
              showDesc && (
                <span styleName="book-desc">{description || '空'}</span>
              )
            }
            {
              Boolean(percentage) && (
                <span>已读 {(percentage * 100).toFixed(1)}%</span>
              )
            }
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
      </div>
    )
  }
}
