import React, { Component } from 'react'

interface Props {
  toc: Schema.TocItem[]
}

export default class BookToc extends Component<Props, void> {

  renderLink(sectionId, hash, label) {
    if (hash) {
      return <a className="text-link" href={`#${sectionId},${hash}`}>{label}</a>
    }
    return <a className="text-link" href={`#${sectionId}`}>{label}</a>
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
