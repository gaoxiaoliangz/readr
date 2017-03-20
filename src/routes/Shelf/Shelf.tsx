import React, { Component } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import { loadShelf } from '../../actions'
import BookList from '../../components/BookList'
import Container from '../../components/Container'
import { Tab, Tabs } from '../../components/Tab'
import * as selectors from '../../selectors'

interface IProps {
  shelf?: SelectedPagination
  loadShelf?: typeof loadShelf
}

class Shelf extends Component<IProps, {}> {

  constructor(props) {
    super(props)
  }

  componentWillMount() {
    this.props.loadShelf()
  }

  render() {
    const bookList = _.get(this.props.shelf, ['pages', '1'], [])

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
    shelf: selectors.pagination.shelf(state)
  }
}

export default connect(
  mapStateToProps,
  { loadShelf }
)(Shelf as any)
