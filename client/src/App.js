import React, { Component }                        from 'react'
import { BrowserRouter as Router, Route, Switch }  from 'react-router-dom'
import Home                                        from './Home'
import User                                        from './User'
import NotFound                                    from './NotFound'
import SignIn                                      from './SignIn'
import SignUp                                      from './SignUp'

class App extends Component {

  constructor(){
    super();
  }

  render () {
    return <Router>
      <Switch>
        <Route exact path='/'                component={Home} />
        <Route exact path='/home'            component={Home} />
        <Route exact path="/user/:userId"    component={User} />
        <Route exact path="/users/sign_in"   component={SignIn} />
        <Route exact path="/users/sign_up"   component={SignUp} />
        <Route                               component={NotFound} />
      </Switch>
    </Router>
  }
}

export default App
