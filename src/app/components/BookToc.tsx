import React, { Component } from 'react'

interface Props {
  toc: Schema.TocChapter[]
}

export default class BookToc extends Component<Props, void> {

  renderLink(ref, hash, label) {
    if (hash) {
      return <a className="text-link" href={`#${ref},${hash}`}>{label}</a>
    }
    return <a className="text-link" href={`#${ref}`}>{label}</a>
  }

  renderNav(list: Schema.TocChapter[]) {
    return (
      <ul>
        {
          list.map((item, index) => {
            const _renderLink = () => {
              return this.renderLink(item.srcObject.name, item.srcObject.hash, item.name)
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
