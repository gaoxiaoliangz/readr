import React, { Component } from 'react'
import _ from 'lodash'
import Books from '../Books/Books'
import Input from '../../components/Input/Input'
import helpers from '../../helpers'
import parseUrlencoded from '../../../utils/parseUrlencoded'
import Branding from '../Branding/Branding'
import Colophon from '../../components/Colophon/Colophon'
import DocContainer from '../../components/DocContainer'
import Container from '../../components/Container/Container'

interface Props {
  location: RLocation
}

interface State {
  keyword?: string
  inputVal?: string
}

class BookSearch extends Component<Props, State> {

  constructor(props) {
    super(props)
    this.state = {
      keyword: '',
      inputVal: ''
    }
  }

  componentWillReceiveProps(nextProps, nextState) {
    const queryChanged = !_.isEqual(this.props.location.query, nextProps.location.query)
    if (queryChanged && nextProps.location.query.q) {
      const keyword = nextProps.location.query.q
      this.setState({
        keyword,
        inputVal: keyword
      })
    }
  }

  render() {
    return (
      <DocContainer title="搜索">
        <Branding />
        <Container>
          <Input
            value={this.state.inputVal}
            placeholder="搜索"
            onChange={(e) => {
              this.setState({
                inputVal: e.target.value
              })
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                const queryString = parseUrlencoded({
                  ...this.props.location.query,
                  q: e.target.value
                })
                helpers.redirect(`${this.props.location.pathname}?${queryString}`)
              }
            }}
          />
          {
            this.state.keyword && (
              <Books
                sectionTitle="搜索结果"
                keyword={this.state.keyword}
              />
            )
          }
        </Container>
        <Colophon />
      </DocContainer>
    )
  }
}

export default BookSearch
