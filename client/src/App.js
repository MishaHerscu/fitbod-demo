import React, { Component }                        from 'react'
import { BrowserRouter as Router, Route, Switch }  from 'react-router-dom'
import Home                                        from './Home'
import User                                        from './User'
import NotFound                                    from './NotFound'

class App extends Component {

  constructor(){
    super();
    this.state = {
      currentUser: null
    }
    this.updateCurrentUser = this.updateCurrentUser.bind(this);
  }

  componentDidMount(){
    let that = this
    fetch('/api/users/check_for_user', {})
    .then(function(response){
      if(response.data){
        if(response.data.email){ that.setState({ currentUser: response.data.email }) }
        else { that.setState({ currentUser: null }) }
      } else { that.setState({ currentUser: null }) }
    })
    .catch(function(error){
      console.error(error)
    })
  }

  updateCurrentUser(email) {
    this.setState({
      currentUser: email
    })
  }

  render () {
    return <Router>
      <Switch>
        <Route exact path='/'               component={Home} />
        <Route exact path='/home'           component={Home} />
        <Route exact path="/user/:userId"   component={User} />
        <Route                              component={NotFound} />
      </Switch>
    </Router>
  }
}

export default App
