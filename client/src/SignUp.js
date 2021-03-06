import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Nav from './Nav'

class SignUp extends Component {

constructor() {
  super()
  this.state = {
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    password_confirmation: ''
  }
  this.handleFirstNameChange = this.handleFirstNameChange.bind(this)
  this.handleLastNameChange = this.handleLastNameChange.bind(this)
  this.handleEmailChange = this.handleEmailChange.bind(this)
  this.handlePasswordChange = this.handlePasswordChange.bind(this)
  this.handlePasswordConfirmationChange = this.handlePasswordConfirmationChange.bind(this)
  this.handleSubmit = this.handleSubmit.bind(this)
}

fetch (endpoint) {
  return window.fetch(endpoint)
  .catch(error => console.error(error))
}

handleFirstNameChange(event) {
  this.setState({first_name: event.target.value})
}

handleLastNameChange(event) {
  this.setState({last_name: event.target.value})
}

handleEmailChange(event) {
  this.setState({email: event.target.value})
}

handlePasswordChange(event) {
  this.setState({password: event.target.value})
}

handlePasswordConfirmationChange(event) {
  this.setState({password_confirmation: event.target.value})
}

handleSubmit(event) {
  event.preventDefault()
  const first_name = this.state.first_name
  const last_name = this.state.last_name
  const email = this.state.email
  const password = this.state.password
  const password_confirmation = this.state.password.password_confirmation
  const data = {
                  user: {
                          first_name: first_name,
                          last_name: last_name,
                          email: email,
                          password: password,
                          password_confirmation: password_confirmation
                        }
               }
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
    body: JSON.stringify(data)
  };
  this.fetch('/users/sign_up', requestOptions)
  .then(resultData => this.setState({ resultData: resultData }))
  .then(() => console.log(this.state))
  .catch(error => console.error(error))
}

render () {

  const classes = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }))

  return ([<Nav key="nav" />,<Container component="main" maxWidth="xs" key="container">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate onSubmit={this.handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="first_name"
            label="First name"
            name="first_name"
            autoFocus
            value={this.state.first_name}
            onChange={this.handleFirstNameChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="last_name"
            label="Last name"
            name="last_name"
            value={this.state.last_name}
            onChange={this.handleLastNameChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email address"
            name="email"
            autoComplete="email"
            value={this.state.email}
            onChange={this.handleEmailChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            value={this.state.password}
            onChange={this.handlePasswordChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password-confirmation"
            label="Password confirmation"
            type="password"
            id="password-confirmation"
            value={this.state.password_confirmation}
            onChange={this.handlePasswordConfirmationChange}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign up
          </Button>
        </form>
      </div>
  </Container>])
}
}

export default SignUp
