import React, { Component } from 'react'
import { connect } from 'react-redux'
import CSSModules from 'react-css-modules'
import _ from 'lodash'
import DocContainer from '../../components/DocContainer'
import { Container } from '../../components/layout'
import styles from './About.scss'
import Branding from '../Branding/Branding'
import Colophon from '../../components/Colophon/Colophon'
import PostRenderer from '../Post/PostRenderer'
import Markdown from '../../components/Markdown/Markdown'

interface Props {
}

interface State {
}

@CSSModules(styles)
class About extends Component<Props, State> {

  render() {
    return (
      <DocContainer bodyClass="page-about" title="关于">
        <Branding />
        <Container maxWidth={600}>
          <PostRenderer
            slug="about"
            getComponent={(data) => {
              return (
                <div className={styles.post}>
                  <h1 className="page-title">{data.post.title}</h1>
                  <div className={styles.content}>
                    <Markdown
                      input={data.post.markdown}
                    />
                  </div>
                </div>
              )
            }}
          />
        </Container>
        <Colophon />
      </DocContainer>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
  }
}

export default connect<{}, {}, {}>(
  mapStateToProps
)(About)
