import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import { Link } from 'react-router'
import { Container } from '../../elements/_layout'
import CollectionList from './CollectionList'
import { ICollectionEntity } from './CollectionItem'
const styles: any = require('./Collection.css')

interface IProps {
  list: ICollectionEntity[]
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
      <div styleName="section">
        <Container>
          <h2 styleName="title">{title}</h2>
          <CollectionList list={list} />
          <Link styleName="view-more" to="/collections">浏览更多书单</Link>
        </Container>
      </div>
    )
  }
}

export default CollectionSection
