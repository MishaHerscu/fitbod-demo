import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Container, Header, Segment, Button, Icon, Dimmer, Loader, Divider, List } from 'semantic-ui-react'

class Users extends Component {
  constructor () {
    super()
    this.state = {}
    this.getUsers = this.getUsers.bind(this)
    this.getUser = this.getUser.bind(this)
  }

  componentDidMount () {
    this.getUsers()
  }

  fetch (endpoint) {
    return window.fetch(endpoint)
    .then(response => response)
    .catch(error => console.log(error))
  }

  getUsers () {
    this.fetch('/api/users')
    .then(users => {
      if (users) {
        if (users.length) {
          this.setState({users: users})
        } else {
          this.setState({users: []})
        }
      } else {
        this.setState({users: []})
      }
    })
  }

  getUser (id) {
    this.fetch(`/api/users/${id}`)
    .then(user => this.setState({user: user}))
  }

  render () {
    let {users} = this.state
    return users
      ? <Container text>

          <Header as='h2' icon textAlign='center' color='teal'>
            <Icon name='unordered list' circular />
            <Header.Content>All Users</Header.Content>
          </Header>

          <Divider hidden section />

          <Container textAlign='center'>
            { users && users.length
              ? users.map((user, i) => <List.Item key={user.id}><Link to={'/workouts/' + user.id}>{user.email}</Link></List.Item>)
              : 'No users found.'
            }
          </Container>

        </Container>
      : <Container text>
          <Dimmer active inverted>
            <Loader content='Loading' />
          </Dimmer>
        </Container>
  }
}

export default Users
