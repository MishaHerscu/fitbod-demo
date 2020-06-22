import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

class Nav extends Component {
  constructor () {
    super()
    this.state = {}
  }

  render () {
    return <Menu secondary style={{padding: '0px 0px 30px 41px'}}>
      <Menu.Item>
        <Link to='/users/sign_in'>Sign in</Link>
      </Menu.Item>
    </Menu>
  }
}

export default Nav
