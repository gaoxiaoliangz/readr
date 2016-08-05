import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import CollectionItem, { IProps as ICollectionItemProps } from './CollectionItem'
const styles: any = require('./Collection.css')

export interface IProps {
  list: ICollectionItemProps[]
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
    const { list } = this.props

    return (
      <div styleName="list">
        {
          list.map((item, index) => {
            return (
              <CollectionItem key={index} {...item} />
            )
          })
        }
      </div>
    )
  }
}

export default CollectionList
