import React, { Component } from 'react'
import { Container, Header, Segment, Button, Icon, Dimmer, Loader, Divider } from 'semantic-ui-react'

class Home extends Component {
  constructor () {
    super()
    this.state = {}
    this.getUsers = this.getUsers.bind(this)
    this.getUser = this.getUser.bind(this)
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

  getUsers () {
    this.fetch('/api/users')
      .then(users => {
        if (users.length) {
          this.setState({users: users})
          this.getUser(users[0].id)
        } else {
          this.setState({users: []})
        }
      })
  }

  getUser (id) {
    this.fetch(`/api/users/${id}`)
      .then(user => this.setState({user: user}))
  }

  getWorkouts () {
    this.fetch('/api/workouts')
      .then(workouts => {
        if (workouts.length) {
          this.setState({workouts: workouts})
          this.getWorkout(workouts[0].id)
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
    let {workouts, workout} = this.state
    return workouts
      ? <Container text>
        <Header as='h2' icon textAlign='center' color='teal'>
          <Icon name='unordered list' circular />
          <Header.Content>
            List of Workouts
          </Header.Content>
        </Header>
        <Divider hidden section />
        {workouts && workouts.length
          ? <Button.Group color='teal' fluid widths={workouts.length}>
            {Object.keys(workouts).map((key) => {
              return <Button active={workout && workout.id === workouts[key].id} fluid key={key} onClick={() => this.getWorkout(workouts[key].id)}>
                {workouts[key].title}
              </Button>
            })}
          </Button.Group>
          : <Container textAlign='center'>No workouts found.</Container>
        }
        <Divider section />
        {workout &&
          <Container>
            <Header as='h2'>{workout.title}</Header>
            {workout.description && <p>{workout.description}</p>}
            {workout.ingredients &&
              <Segment.Group>
                {workout.ingredients.map((ingredient, i) => <Segment key={i}>{ingredient.description}</Segment>)}
              </Segment.Group>
            }
            {workout.steps && <p>{workout.steps}</p>}
            {workout.source && <Button basic size='tiny' color='teal' href={workout.source}>Source</Button>}
          </Container>
        }
      </Container>
      : <Container text>
        <Dimmer active inverted>
          <Loader content='Loading' />
        </Dimmer>
      </Container>
  }
}

export default Home
