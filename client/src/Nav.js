import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

class Nav extends Component {
  constructor () {
    super()
  }

  render () {
    return <Menu secondary style={{margin: '0px 41px 30px 41px'}}>
      <Menu.Item><Link to='/'>View users</Link></Menu.Item>
      <Menu.Menu position='right'>
        <Menu.Item position='right'><Link to='/users/sign_in'>Sign in</Link></Menu.Item>
        <Menu.Item position='right'><Link to='/users/sign_up'>Sign up</Link></Menu.Item>
      </Menu.Menu>
    </Menu>
  }
}

export default Nav
