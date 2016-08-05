import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import CollectionList from './CollectionList'
import { IProps as ICollectionItemProps } from './CollectionItem'
const styles: any = require('./Collection.css')

interface IProps {
  list: ICollectionItemProps[]
  title: string
}

interface IState {
}

@CSSModules(styles)
class CollectionSection extends Component<IProps, IState> {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
  }

  render() {
    const { list, title } = this.props

    return (
      <div>
        <h2 styleName="title">{title}</h2>
        <CollectionList list={list} />
      </div>
    )
  }
}

export default CollectionSection
