import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchCollections } from '../../store/actions'
import { Container } from '../../elements/_layout'
import { CollectionList } from '../../components/CollectionSection'
import { Link } from 'react-router'

interface Props {
  fetchCollections: any
  newestCollections: Array<any>
}

class Collections extends Component<Props, {}> {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchCollections()
  }

  render() {
    let { newestCollections } = this.props

    let list = newestCollections
      .map(item => ({
        name: item.name,
        id: item.id,
        bookCovers: item.items.map(book => book.refData.cover),
        description: item.description
      }))

    return (
      <div className="page-collections">
        <div style={{maxWidth: 800, margin: '0 auto'}}>
          <h2 className="page-title">往期书单</h2>
        </div>
        <CollectionList maxWidth={800} style="dark" list={list} />
        <div className="page-load-more">加载更多</div>
      </div>
    )
  }
}

export default connect(
  state => ({
    newestCollections: state.pagination.bookCollections.newest
      ? state.pagination.bookCollections.newest.ids.map(id => state.entities.bookCollections[id])
      : []
  }),
  { fetchCollections }
)(Collections as any)
