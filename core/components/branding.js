import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import { Appbar, Button, Container } from 'muicss/react'
import { checkAuthStatus } from 'utils'


class Branding extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isAuthed: false,
      username: '',
      loadingAuthStatus: true
    }
  }

  componentDidMount() {
    checkAuthStatus().then(function(data) {
      if(data.authed) {
        this.setState({
          username: data.user,
          isAuthed: true,
          loadingAuthStatus: false
        })
      }else{
        this.setState({
          loadingAuthStatus: false
        })
      }
    }.bind(this))
  }

  render() {

    let hidden = 'hidden'
    if(!this.state.loadingAuthStatus) {
      hidden = ''
    }


    return (
      <Appbar className="mui--z1 branding">
        <Container>
          <div>
            <h1 className="logo left">
              <Link to="/">readr</Link>
            </h1>
            {
              (()=>{
                if(this.state.isAuthed) {
                  return (
                    <ul className={"right mui-list--inline mui--text-body2 "+hidden}>
                      <li><Link to='/#'>{this.state.username}</Link></li>
                      <li><a href='/logout'>退出</a></li>
                    </ul>
                  )
                }else{
                  return (
                    <ul className={"right mui-list--inline mui--text-body2 "+hidden}>
                      <li>
                        <Link to="/signin">登录</Link>
                      </li>
                      <li>
                        <Link to="/signup">注册</Link>
                      </li>
                    </ul>
                  )
                }
              })()
            }
          </div>
        </Container>
      </Appbar>
    )
  }
}

export default Branding
