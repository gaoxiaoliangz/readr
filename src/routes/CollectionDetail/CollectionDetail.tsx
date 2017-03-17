import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button } from '../../components/form'
import { loadCollection, sendNotification } from '../../actions'
import BookList from '../../components/BookListSection'
import { Container } from '../../components/layout'
import CSSModules from 'react-css-modules'
const styles = require('./CollectionDetail.css')

interface Props {
  name: string
  loadCollection: typeof loadCollection
  params: any
  bookCollection: any
  sendNotification: typeof sendNotification
}

@CSSModules(styles)
class CollectionDetail extends Component<Props, {}> {

  constructor(props) {
    super(props)
  }

  componentWillMount() {
    this.props.loadCollection(this.props.params.id)
  }

  render() {
    const bookCollection = this.props.bookCollection ? this.props.bookCollection : { items: [] }
    const items = bookCollection.items

    return (
      <div className="collection">
        <div styleName="header">
          <Container>
            <div styleName="title">{bookCollection.name}</div>
            <div className="sub-title">10 本书</div>
            <div className="book-slider">
              <BookList bookEntities={items} />
            </div>
            <Button onClick={() => {
              this.props.sendNotification('功能开发中', 'warning')
            }}>收藏</Button>
          </Container>
        </div>
        <div className="page-content">
          <Container>
            <p>{bookCollection.description}</p>
          </Container>
        </div>
      </div>
    )
  }
}

export default connect(
  (state, ownProps: any) => {
    return { bookCollection: state.entities.bookCollections[ownProps.params.id] }
  },
  { loadCollection, sendNotification }
)(CollectionDetail as any)
