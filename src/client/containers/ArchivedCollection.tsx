import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { fetchCollections } from 'actions/index'

interface Props {
  fetchCollections: any
  newestCollections: Array<any>
}

class ArchivedCollection extends Component<Props, {}> {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchCollections()
  }

  render() {
    return (
      <div className="archived-collection">
        <div className="page-title">往期书单</div>
        <ul>
          {
            this.props.newestCollections.length !== 0
              && this.props.newestCollections.map((coll, index) => {
                return (
                  <li key={index}>
                    <h2>{coll.name}</h2>
                    <p>{coll.description}</p>
                  </li>
                )
              })
          }
        </ul>
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
)(ArchivedCollection as any)
