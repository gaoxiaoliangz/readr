import React, { Component } from 'react'

interface Props {
  toc: Schema.TocItem[]
  onLinkClick?: (href: string) => void
}

export default class BookToc extends Component<Props, void> {

  constructor(props) {
    super(props)
    this._handleLinkClick = this._handleLinkClick.bind(this)
  }

  _handleLinkClick(href) {
    return (e) => {
      if (this.props.onLinkClick) this.props.onLinkClick(href)
    }
  }

  renderLink(sectionId, hash, label) {
    const href = hash
      ? `#${sectionId},${hash}`
      : `#${sectionId}`

    return <a onClick={this._handleLinkClick(href)} className="text-link" href={href}>{label}</a>
  }

  renderNav(list: Schema.TocItem[]) {
    return (
      <ul>
        {
          list.map((item, index) => {
            const _renderLink = () => {
              return this.renderLink(item.sectionId, item.hash, item.name)
            }

            if (item.children) {
              return (
                <li key={index}>
                  {_renderLink()}
                  {this.renderNav(item.children)}
                </li>
              )
            }

            return (
              <li key={index}>
                {_renderLink()}
              </li>
            )
          })
        }
      </ul>
    )
  }

  render() {
    return this.renderNav(this.props.toc)
  }
}
