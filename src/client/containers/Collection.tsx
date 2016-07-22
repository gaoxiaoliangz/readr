import React, { Component } from 'react'
import { connect } from 'react-redux'
import Button from '../elements/form/button'
import { fetchCollection } from '../actions'
import BookList from '../components/book-list-section'

interface Props {
  name: string
  fetchCollection: any
  params: any
  bookCollection: any
}

class Collection extends Component<Props, {}> {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchCollection(this.props.params.id)
  }

  render() {
    const bookCollection = this.props.bookCollection ? this.props.bookCollection : { items: [] }
    const items = bookCollection.items
      .filter(item => item.refData)
      .map(item => item.refData)

    return (
      <div className="collection">
        <div className="page-header">
          <div className="page-title">{bookCollection.name}</div>
          <div className="sub-title">10 本书</div>
          <div className="book-slider">
            <BookList bookEntities={items} />
          </div>
          <Button>收藏</Button>
        </div>
        <div className="page-content">
          <p>{bookCollection.description}</p>
        </div>
      </div>
    )
  }
}

export default connect(
  (state, ownProps: any) => {
    return { bookCollection: state.entities.bookCollections[ownProps.params.id] }
  },
  { fetchCollection }
)(Collection as any)
