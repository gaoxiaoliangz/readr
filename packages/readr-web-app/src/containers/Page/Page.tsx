import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose, graphql } from 'react-apollo'
import { sendNotification } from '../../actions'
import withIndicator from '../../helpers/withIndicator'
import POST_QUERY from '../../graphql/Post.gql'
import Markdown from '../../components/Markdown/Markdown'
import DocContainer from '../../components/DocContainer'
import { Container } from '../../components/layout'
import styles from './Page.scss'
import Branding from '../Branding/Branding'
import Colophon from '../../components/Colophon/Colophon'
import CSSModules from 'react-css-modules'

type Data = State.Apollo<{
  post: Schema.Post
}>

interface OwnProps {
}

interface StateProps {
  sendNotification: typeof sendNotification
  data: Data
}

@CSSModules(styles)
class Page extends Component<OwnProps & StateProps, {}> {
  render() {
    const { data } = this.props

    return (
      <DocContainer bodyClass="page-about" title={data.post.title}>
        <Branding />
        <Container maxWidth={600}>
          <div styleName="post">
            <h1 className="page-title">{data.post.title}</h1>
            <div styleName="content">
              <Markdown
                input={data.post.markdown}
              />
            </div>
          </div>
        </Container>
        <Colophon />
      </DocContainer>
    )
  }
}

export default compose(
  connect(
    (state, ownProps) => {
      return {}
    },
    { sendNotification }
  ),
  graphql(POST_QUERY, {
    options: (props) => {
      return {
        variables: {
          slug: props.params.slug || null
        }
      }
    }
  }),
  withIndicator()
)(Page) as React.ComponentClass<OwnProps>
