import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Container, Header, Button, Icon, Dimmer, Loader, Divider, List } from 'semantic-ui-react'
import Nav from './Nav'

class User extends Component {

  constructor () {
    super()
    this.state = {}
    this.getWorkouts = this.getWorkouts.bind(this)
    this.getWorkout = this.getWorkout.bind(this)
  }

  componentDidMount () {
    this.getWorkouts()
  }

  fetch (endpoint) {
    return window.fetch(endpoint)
    .then(response => response.json())
    .catch(error => console.log(error))
  }

  getWorkouts () {
    this.fetch('/api/workouts')
    .then(workouts => {
      console.log('here: ', workouts)
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
      ? <Container>

          <Header as='h2' icon textAlign='center' color='teal'>
            <Icon name='unordered list' circular />
            <Header.Content>Workouts for User {this.props.match.params.userId}</Header.Content>
          </Header>

          <Divider hidden section />

          <Container textAlign='center'>
            { workouts && workouts.length
              ? workouts.map((workout, i) => <List.Item key={i}>{workout.duration} minutes on {workout.date}</List.Item>)
              : 'No workouts found.'
            }
          </Container>

          <Divider hidden section />

          <Container textAlign='center'>
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
