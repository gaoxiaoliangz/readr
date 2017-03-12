import React, { Component } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import { fetchShelf } from '../../actions'
import BookList from '../../components/BookList'
import Container from '../../components/Container'
import { Tab, Tabs } from '../../components/Tab'
import * as selectors from '../../selectors'

interface IProps {
  shelf?: any
  fetchShelf?: any
}

class Shelf extends Component<IProps, {}> {

  static fetchData({store, params}) {
    return store.dispatch(fetchShelf())
  }

  constructor(props) {
    super(props)
  }

  componentWillMount() {
    this.props.fetchShelf()
  }

  render() {
    let bookList = this.props.shelf

    return (
      <Container>
        <Tabs style={{marginTop: 20}}>
          <Tab title="全部">
            <BookList bookEntities={bookList} />
          </Tab>
          <Tab title="我的上传">
            空
          </Tab>
        </Tabs>
      </Container>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    shelf: selectors.shelfBooks()(state)
  }
}

export default connect(
  mapStateToProps,
  { fetchShelf }
)(Shelf as any)
