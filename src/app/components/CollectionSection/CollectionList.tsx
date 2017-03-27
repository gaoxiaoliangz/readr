import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import CollectionItem, { ICollectionEntity } from './CollectionItem'
const styles = require('./Collection.scss')

export interface IProps {
  list: ICollectionEntity[]
  style?: 'dark' | 'light'
  maxWidth?: number
}

interface IState {
}

@CSSModules(styles)
class CollectionList extends Component<IProps, IState> {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
  }

  render() {
    const { list, style, maxWidth } = this.props

    return (
      <div styleName="list" className="clearfix">
        {
          list.map((item, index) => {
            return (
              <CollectionItem maxWidth={maxWidth} style={style} key={index} {...item} />
            )
          })
        }
      </div>
    )
  }
}

export default CollectionList
