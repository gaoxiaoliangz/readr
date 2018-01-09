import React, { Component } from 'react'
import { Dropdown, DropdownItem, DropdownItemSep } from '../../components/Dropdown'
import { graphql, compose, gql } from 'react-apollo'
import { Link } from 'react-router'
import withIndicator from '../../helpers/withIndicator'
import helpers from '../../helpers'
import VIEWER_READING_HISTORY from '../../graphql/fragments/ViewerReadingHistory.gql'

type Data = State.Apollo<{
  viewer: {
    readingHistory: Schema.Connection<Schema.ReadingHistoryEntry>
  }
}>

interface Props {
  data: Data
}

class RecentReadingMenu extends Component<Props, void> {
  render() {
    return this.props.data.viewer.readingHistory.edges.length !== 0 && (
      <Dropdown className="dropdown-recent-reading" title="最近阅读">
        {
          this.props.data.viewer.readingHistory.edges.slice(0, 5).map((edge, index) => {
            return (
              <DropdownItem key={index}>
                <Link to={helpers.getReaderURI(edge.node.bookId)}>{edge.node.title}</Link>
              </DropdownItem>
            )
          })
        }
        <DropdownItemSep />
        <DropdownItem><Link to={`/user/shelf`}>查看全部</Link></DropdownItem>
      </Dropdown>
    )
  }
}

const withData = graphql(gql`
  query RecentReadingMenu {
    viewer {
      id
      readingHistory {
        ...ViewerReadingHistory
      }
    }
  }
  ${VIEWER_READING_HISTORY}
`)

export default compose(
  withData,
  withIndicator({
    renderError: false
  })
)(RecentReadingMenu)
