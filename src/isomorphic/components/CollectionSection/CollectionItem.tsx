import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import { Link } from 'react-router'
const styles = require('./Collection.scss')

export interface ICollectionEntity {
  cover?: string
  name: string
  id: string
  bookCovers: string[]
  description: string
}

interface IProps extends ICollectionEntity {
  style?: 'dark' | 'light'
  maxWidth?: number
}

interface IState {
}

@CSSModules(styles)
class CollectionItem extends Component<IProps, IState> {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
  }

  render() {
    const { description, name, id, bookCovers, style, maxWidth } = this.props

    return (
      <div className="collection-item" styleName={style === 'dark' ? 'item--dark' : 'item--light'}>
        <div style={{ maxWidth: maxWidth || '100%', margin: '0 auto' }}>
          <div className="row">
            <div className="col-md-6">
              <h2 styleName="name">
                <Link styleName="link" to={`collections/${id}`}>{name}</Link>
              </h2>
              <div styleName="desc">{description}</div>
            </div>
            <div className="col-md-6">
              <ul styleName="covers">
                {
                  bookCovers.map((bookCover, index) => {
                    return (
                      <li key={index}>
                        <img src={bookCover} />
                      </li>
                    )
                  })
                }
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CollectionItem
