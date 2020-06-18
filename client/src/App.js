import React, { Component }                        from 'react'
import { BrowserRouter as Router, Route, Switch }  from 'react-router-dom'
import Home                                        from './Home'
import User                                        from './User'
import NotFound                                    from './NotFound'

class App extends Component {
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
