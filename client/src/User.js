import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Container, Header, Button, Dimmer, Loader, Divider, List } from 'semantic-ui-react'
import Nav from './Nav'

class User extends Component {

  constructor () {
    super()
    this.state = {}
    this.getUser = this.getUser.bind(this)
    this.getWorkouts = this.getWorkouts.bind(this)
    this.getWorkout = this.getWorkout.bind(this)
  }

  componentDidMount () {
    this.getUser()
    this.getWorkouts()
  }

  fetch (endpoint) {
    return window.fetch(endpoint)
    .then(response => response.json())
    .catch(error => console.error(error))
  }

  getUser () {
    this.fetch(`/api/users/${this.props.match.params.userId}`)
    .then((user) => {
      if (user) {
        if (user.first_name) {
          this.setState({user: user})
          this.setState({displayName: user.first_name + ' ' + user.last_name })
        } else {
          this.setState({user: null})
          this.setState({displayName: 'No user found.' })
        }
      } else {
        this.setState({user: null})
        this.setState({displayName: 'No user found.' })
      }
    })
  }

  getWorkouts () {
    this.fetch('/api/workouts')
    .then(workouts => {
      if (workouts) {
        if (workouts.length) {
          workouts = workouts.filter((workout) => {
            return workout.user_id.toString() === this.props.match.params.userId.toString()
          })
          if (workouts.length) {
            this.setState({workouts: workouts})
          } else {
            this.setState({workouts: []})
          }
        } else {
          this.setState({workouts: []})
        }
      } else {
        this.setState({workouts: []})
      }
    })
  }

  getWorkout (id) {
    this.fetch(`/api/workouts/${id}`)
    .then(workout => this.setState({workout: workout}))
  }

  render () {
    let {workouts} = this.state
    return [<Nav />, workouts
      ? <Container style={{padding: '0px 0px 0px 5px'}}>

          <Header as='h2' icon style={{textAlign: 'left', color: '#FF6E60'}}>
            <Header.Content>{this.state.displayName}</Header.Content>
          </Header>

          <Divider hidden section />

          <Container textAlign='left'>
            <Header as='h2' icon style={{textAlign: 'left', color: '#FF6E60'}}>
              <Header.Subheader>Email Address</Header.Subheader>
              <Header.Subheader>
                { this.state.user ? <List.Item key={this.state.user.email}><a href={"mailto:" + this.state.user.email}>{this.state.user.email}</a></List.Item> : <Header.Subheader>No email address found.</Header.Subheader> }
              </Header.Subheader>
            </Header>
          </Container>

          <Divider hidden section />

          <Container textAlign='left'>
            <Header as='h2' icon style={{textAlign: 'left', color: '#FF6E60'}}>
              <Header.Subheader>Workouts</Header.Subheader>
            </Header>
            { workouts && workouts.length
              ? workouts.map((workout, i) => <List.Item key={i}>{workout.duration} minutes on {workout.date}</List.Item>)
              : <Header.Subheader>No workouts found.</Header.Subheader>
            }
          </Container>

          <Divider hidden section />

          <Container textAlign='left'>
            <Button as={Link} to='/'>Back</Button>
          </Container>

        </Container>
      : <Container text>

          <Dimmer active inverted>
            <Loader content='Loading' />
          </Dimmer>

        </Container>]
  }
}

export default User
