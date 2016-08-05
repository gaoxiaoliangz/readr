import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import { Link } from 'react-router'
const styles: any = require('./Collection.css')

export interface IProps {
  cover: string
  name: string
  id: string
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
    const { cover, name, id } = this.props

    return (
      <div styleName="item">
        <Link to={`collections/${id}`}>
          <div styleName="cover">{cover}</div>
          <div styleName="name">{name}</div>
        </Link>
      </div>
    )
  }
}

export default CollectionItem
